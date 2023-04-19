import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiArrowLeftSLine, RiUploadLine } from 'react-icons/ri'

import { api } from '../../services/api'

import { Container, Content, Dish, Form } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { NewIngredients } from '../../components/NewIngredients'
import { Button } from './../../components/Button/index'

export function CreateDish() {
    const [loading, setLoading] = useState(false)
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [imageName, setImageName] = useState('')
    const [image, setImage] = useState(null)

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    function handleAddIngredient() {
        if (newIngredient.length < 1) {
            return alert('Erro: Você está tentando inserir um nome de ingrediente inválido!')
        } else {
            setIngredients(preState => [...preState, newIngredient])
            setNewIngredient('')
        }
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    function handleChangeImage(file) {
        if (file) {
            let fileName = file.name.slice(0, 16)

            if (file.name.length > 16) {
                const fileExtension = file.name.split('.').pop()
                fileName += `.${fileExtension}`
            }

            setImage(file)
            setImageName(fileName)
        }
    }

    async function handleNewDish() {
        if (!image) {
            return alert('Erro: Você não inseriu uma imagem para o prato!')
        }

        if (!title) {
            return alert('Erro: Você não informou o nome do prato!')
        }

        if (!category) {
            return alert('Erro: Você não selecionou a categoria do prato!')
        }

        if (ingredients.length < 1) {
            return alert('Erro: Adicione pelo menos um ingrediente!')
        }

        if (newIngredient) {
            return alert('Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!')
        }

        if (!price) {
            return alert('Erro: Você não informou o preço do prato!')
        }

        if (!description) {
            return alert('Erro: Você não informou uma descrição para o prato!')
        }

        setLoading(true)

        const formData = new FormData()

        formData.append('image', image)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('price', price)

        ingredients.map(ingredient => (
            formData.append('ingredients', ingredient)
        ))

        await api.post('/dishes', formData)
            .then(() => {
                alert('Prato adicionado com sucesso!')

                navigate('/')
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Falha ao criar o prato!')
                }
            })

        setLoading(false)
    }

    return (
        <Container>
            <Header />

            <Content>
                <Dish>
                    <ButtonText
                        title='Voltar'
                        icon={RiArrowLeftSLine}
                        onClick={handleBack}
                    />

                    <Form>
                        <fieldset>
                            <legend>Adicionar prato</legend>
                            <div className='dishImage'>
                                <label htmlFor='image'>Imagem do prato</label>
                                <div>
                                    <label htmlFor='image'>
                                        <RiUploadLine size={24} />
                                        {
                                            image ?
                                                imageName
                                                :
                                                <span>Selecione imagem</span>
                                        }
                                    </label>

                                    <input
                                        id='image'
                                        type='file'
                                        name='image'
                                        accept='image/*'
                                        onChange={e => handleChangeImage(e.target.files[0])}
                                    />
                                </div>
                            </div>

                            <div className='dishName'>
                                <label htmlFor='name'>Nome</label>
                                <Input
                                    id='name'
                                    type='text'
                                    name='name'
                                    placeholder='Ex.: Salada Gomides'
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>

                            <div className='dishCategory'>
                                <label htmlFor='category'>Categoria</label>

                                <select id='category' defaultValue={'default'} onChange={e => setCategory(e.target.value)}>
                                    <option value='default' disabled>Selecione a categoria</option>
                                    <option value='snack'>Refeições</option>
                                    <option value='dessert'>Sobremesas</option>
                                    <option value='drink'>Bebidas</option>
                                </select>
                            </div>

                            <div className='newIngredients'>
                                <label htmlFor='ingredients'>Ingredientes</label>
                                <div className='ingredients'>
                                    {
                                        ingredients.map((ingredient, index) => (
                                            <NewIngredients
                                                key={String(index)}
                                                value={ingredient}
                                                onClick={() => handleRemoveIngredient(ingredient)}
                                            />
                                        ))
                                    }

                                    <NewIngredients
                                        isNew
                                        id='ingredients'
                                        placeholder='Adicionar'
                                        autocomplete='off'
                                        onChange={e => setNewIngredient(e.target.value)}
                                        value={newIngredient}
                                        onClick={handleAddIngredient}
                                    />
                                </div>
                            </div>

                            <div className='price'>
                                <label htmlFor='price'>Preço</label>
                                <Input
                                    type='number'
                                    id='price'
                                    placeholder='R$ 0,00'
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>

                            <div className='description'>
                                <label htmlFor='description'>Descrição</label>
                                <textarea
                                    id='description'
                                    placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className='button'>
                                <Button
                                    title={loading ? 'Salvando alterações' : 'Salvar alterações'}
                                    disabled={loading}
                                    onClick={handleNewDish}
                                />
                            </div>
                        </fieldset>

                    </Form>
                </Dish>
            </Content>
            <Footer />
        </Container>
    )
}