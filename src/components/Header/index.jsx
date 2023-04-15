import { Link } from 'react-router-dom'
import { RiSearchLine, RiLoginBoxLine, RiDraftLine, RiAddLine } from 'react-icons/ri'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Search, Profile, Dish, Logout } from './styles'

import { Button } from '../Button';

import LogoFoodExplore from '../../assets/LogoFoodExplore.svg'
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'


export function Header({search}) {
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
                            <p>Bon appétit</p>
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
                        autocomplete='off'
                        onChange={e => { search(e.target.value) }}
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
                        <Link to={'/createdish'}>
                            <Button
                                title='Novo prato'
                                icon={RiAddLine}
                            />
                        </Link>
                        :
                        <Link to={'/'}>
                            <Button
                                title={`Pedidos (0)`}
                                icon={RiDraftLine}
                            />
                        </Link>
                }
            </Dish>

            <Logout to='/' onClick={signOut}>
                <RiLoginBoxLine size={24} />
            </Logout>

        </Container>
    )
}