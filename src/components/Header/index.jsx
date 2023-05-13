import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { RiAlignJustify, RiSearchLine, RiCloseLine, RiLoginBoxLine, RiDraftLine, RiAddLine, RiHeartFill } from 'react-icons/ri'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'

import { Button } from '../Button'

import LogoFoodExplore from '../../assets/LogoFoodExplore.svg'
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'


export function Header({ search }) {
    const { signOut, user } = useAuth()
    const [cart, setCart] = useState(0)

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleMenu() {
        document.getElementById('menu').classList.toggle('active')
        document.querySelector('.open').classList.toggle('hide')
        document.querySelector('.close').classList.toggle('show')
    }

    useEffect(() => {
        async function fetchCarts() {
            const response = await api.get('/carts')
            setCart(response.data)
        }

        fetchCarts()
    }, [cart])

    return (
        <Container>
            <menu>
                <div className='mobile'>
                    <div className='icon'>
                        <RiAlignJustify
                            size={24}
                            onClick={handleMenu}
                            className='open'
                        />

                        <RiCloseLine
                            size={26}
                            onClick={handleMenu}
                            className='close'
                        />
                    </div>

                    <nav id='menu' className='menu'>
                        <div className='search'>
                            <label htmlFor='search'>
                                <RiSearchLine size={24} />

                                <input
                                    type='search'
                                    name='search'
                                    id='search'
                                    placeholder='Busque por pratos'
                                    autocomplete='off'
                                    onChange={e => { search(e.target.value) }}
                                />
                            </label>
                        </div>
                        <div className='links'>
                            {
                                user.isAdmin
                                    ?
                                    <div className='adim'>
                                        <Link to='/orders'>Histórico de pedidos</Link>
                                        <Link to='/createdish'>Novo prato</Link>
                                    </div>
                                    :
                                    <div className='user'>
                                        <Link to='/favorites'>Meus favoritos</Link>
                                        <Link to='/orders'>Histórico de pedidos</Link>
                                    </div>
                            }

                            <Link to='/profile'>Área do usuário</Link>
                            <Link to='/' onClick={signOut}>Sair</Link>
                        </div>
                    </nav>

                    <Link to='/' className='logo'>
                        <img src={LogoFoodExplore} alt='Logo do restaurante fictício Food Explore, este logo tem um losango na cor azul-escuro e ao lago escrito Food Explore na cor branca.' />
                        {
                            user.isAdmin
                                ?
                                <p>admin</p>
                                :
                                <p className='welcome'>Bon appétit</p>
                        }
                    </Link>

                    <span className='createDish'>
                        {
                            !user.isAdmin &&
                            <Link to={'/carts'}>
                                <div className='mobileDish'>
                                    <RiDraftLine size={26} />
                                    <p>{cart.length}</p>
                                </div>
                            </Link>
                        }
                    </span>
                </div>

                <div className='desktop'>
                    <Link to='/' className='logo'>
                        <img src={LogoFoodExplore} alt='Logo do restaurante fictício Food Explore, este logo tem um losango na cor azul-escuro e ao lago escrito Food Explore na cor branca.' />
                        {
                            user.isAdmin
                                ?
                                <p>admin</p>
                                :
                                <p>Bon appétit</p>
                        }
                    </Link>

                    <div className='search'>
                        <label htmlFor='search'>
                            <RiSearchLine size={24} />

                            <input
                                type='search'
                                name='search'
                                id='search'
                                placeholder='Busque por pratos'
                                autocomplete='off'
                                onChange={e => { search(e.target.value) }}
                            />
                        </label>
                    </div>

                    {
                        !user.isAdmin &&
                        <Link to={'/favorites'}>
                            <div className='mobileDish'>
                                <RiHeartFill size={26} />
                            </div>
                        </Link>
                    }

                    <Link to='/orders'>Histórico de pedidos</Link>

                    <Link to={'/profile'} className='profile'>
                        <img src={avatarURL} alt='Avatar do usuário' />
                    </Link>

                    {
                        user.isAdmin
                            ?
                            <Link to={'/createdish'}>
                                <Button
                                    title='Novo prato'
                                    icon={RiAddLine}
                                />
                            </Link>
                            :
                            <Link to={'/carts'}>
                                <Button
                                    title={
                                        cart
                                            ?
                                            `Pedidos (${cart.length})`
                                            :
                                            `Pedidos (0)`
                                    }
                                    icon={RiDraftLine}
                                />
                            </Link>
                    }

                    <Link to='/' onClick={signOut}><RiLoginBoxLine size={24} /></Link>

                </div>
            </menu>
        </Container>
    )
}