import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RiArrowLeftSLine, RiUploadLine } from 'react-icons/ri'

import { api } from '../../services/api'

import { Container, Content, Dish, Form } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { NewIngredients } from '../../components/NewIngredients'
import { Button } from '../../components/Button'



export function EditDish() {
    const [loading, setLoading] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [imageName, setImageName] = useState('')
    const [image, setImage] = useState(null)
    const [data, setData] = useState(null)

    const navigate = useNavigate()

    const params = useParams()

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

    async function handleUpdateDish() {
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

        await api.put(`/dishes/${params.id}`, formData)
            .then(alert('Prato atualizado com sucesso!'), navigate(`/details/${params.id}`))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Falha ao atualizar o prato!')
                }
            })

        setLoading(false)
    }

    async function handleRemoveDish() {
        setLoadingDelete(true)

        const isConfirm = confirm('Tem certeza que deseja remover este item?')

        if (isConfirm) {
            await api.delete(`/dishes/${params.id}`)
                .then(() => {
                    alert('Item removido com sucesso!')

                    navigate('/')
                    
                    setLoadingDelete(false)
                })
        } else {
            return
        }
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`)
            setData(response.data.dishedWithIngredient)

            const { title, description, category, price, ingredients, image } = response.data.dishedWithIngredient
            setTitle(title)
            setDescription(description)
            setCategory(category)
            setPrice(price)
            setImage(image)
            setIngredients(ingredients.map(ingredient => ingredient.name))
        }

        fetchDish()
    }, [])

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
                                            imageName
                                                ?
                                                imageName
                                                :
                                                image
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
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>

                            <div className='dishCategory'>
                                <label htmlFor='category'>Categoria</label>

                                <select id='category' value={category} onChange={e => setCategory(e.target.value)}>
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
                                        placeholder='Adicionar'
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
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>

                            <div className='description'>
                                <label htmlFor='description'>Descrição</label>
                                <textarea
                                    id='description'
                                    placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className='button'>
                                <Button
                                    title={loadingDelete ? 'Excluindo prato' : 'Excluir prato'}
                                    disabled={loadingDelete}
                                    onClick={handleRemoveDish}
                                />
                                <Button
                                    title={loading ? 'Salvando alterações' : 'Salvar alterações'}
                                    disabled={loading}
                                    onClick={handleUpdateDish}
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