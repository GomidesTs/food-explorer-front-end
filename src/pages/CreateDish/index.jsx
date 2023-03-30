import { useState } from 'react'
import { RiArrowLeftSLine, RiUploadLine } from 'react-icons/ri'

import { Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { NewIngredients } from '../../components/NewIngredients'
import { Button } from './../../components/Button/index';

export function CreateDish() {
    const [loading, setLoading] = useState(false);

    return (
        <Container>
            <Header />
            <Content>
                <ButtonText
                    title='Voltar'
                    icon={RiArrowLeftSLine}
                />
                <Form>
                    <fieldset>
                        <legend>Adicionar prato</legend>
                        <div className='dishImage'>
                            <label htmlFor='image'>Imagem do prato</label>
                            <div>
                                <label htmlFor='image'>
                                    <RiUploadLine size={24} />
                                    Selecione imagem
                                </label>

                                <Input
                                    id='image'
                                    type='file'
                                    name='image'
                                    accept='image/*'
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
                            />
                        </div>

                        <div className='dishCategory'>
                            <label htmlFor='category'>Categoria</label>

                            <select id='category'>
                                <option value='default'>Selecione a categoria</option>
                                <option value='dishes'>Pratos</option>
                                <option value='drinks'>Bebidas</option>
                                <option value='dessert'>Sobremesas</option>
                            </select>
                        </div>

                        <div className='newIngredients'>
                            <label htmlFor='ingredients'>Ingredientes</label>
                            <div className='ingredients'>
                                <NewIngredients
                                    isNew
                                    id='ingredients'
                                    placeholder='Adicionar'
                                />
                            </div>
                        </div>

                        <div className="price">
                            <label htmlFor="price">Preço</label>
                            <Input
                                type='number'
                                id='price'
                                placeholder='R$ 0,00'
                            />
                        </div>

                        <div className="description">
                            <label htmlFor="description">Descrição</label>
                            <textarea
                                id='description'
                                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                            />
                        </div>
                        <div className="button">
                            <Button
                                title={loading ? "Salvando alterações" : "Salvar alterações"}
                                disabled={loading}
                            />
                        </div>
                    </fieldset>

                </Form>
            </Content>
            <Footer />
        </Container>
    )
}