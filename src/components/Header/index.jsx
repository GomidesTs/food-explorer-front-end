import { Link } from 'react-router-dom'
import { RiSearchLine, RiLoginBoxLine, RiDraftLine, RiAddLine } from 'react-icons/ri'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Search, Profile, Dish, Logout } from './styles'

import { Button } from '../Button';

import LogoFoodExplore from '../../assets/LogoFoodExplore.svg'
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'


export function Header() {
    const { signOut, user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <Content>
                <Link to='/'>
                    <img src={LogoFoodExplore} alt='Logo do restaurante fictício Food Explore, este logo tem um losango na cor azul-escuro e ao lago escrito Food Explore na cor branca.' />
                    {
                        user.isAdmin
                            ?
                            <p>admin</p>
                            :
                            <p>Boas compras</p>
                    }
                </Link>
            </Content>

            <Search>
                <label htmlFor='search'>
                    <RiSearchLine size={24} />

                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Busque por pratos ou ingredientes'
                    />
                </label>
            </Search>

            <Profile>
                <Link to={'/profile'}>
                    <img src={avatarURL} alt="" />
                </Link>
            </Profile>

            <Dish>
                {
                    user.isAdmin
                        ?
                        <Button
                        title='Novo prato'
                        icon={RiAddLine}
                        />
                        :
                        <Button
                            title={`Pedidos (0)`}
                            icon={RiDraftLine}
                        />
                }
            </Dish>

            <Logout to='/' onClick={signOut}>
                <RiLoginBoxLine size={24} />
            </Logout>

        </Container>
    )
}