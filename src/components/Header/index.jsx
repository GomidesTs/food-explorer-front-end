import { Link } from 'react-router-dom'
import { FiSearch, FiUser, FiLogOut } from 'react-icons/fi'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Search, Profile, Logout } from './styles'

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
                </Link>
            </Content>

            <Search>
                <label htmlFor='search'>
                    <FiSearch size={24} />

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

            <Logout to='/' onClick={signOut}>
                <FiLogOut size={24} />
            </Logout>

        </Container>
    )
}