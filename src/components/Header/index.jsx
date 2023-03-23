import { FiSearch, FiUser, FiLogOut } from 'react-icons/fi';

import { Container, Content, Search, Profile, Logout } from './styles'

import LogoFoodExplore from '../../assets/LogoFoodExplore.svg'

export function Header() {
    return (
        <Container>
            <Content>
                <a href='/'>
                    <img src={LogoFoodExplore} alt='Logo do restaurante fictício Food Explore, este logo tem um losango na cor azul-escuro e ao lago escrito Food Explore na cor branca.' />
                </a>
            </Content>

            <Search>
                <label htmlFor="search">
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
                <FiUser size={24} />
            </Profile>
            
            <Logout>
                <FiLogOut size={24} />
            </Logout>

        </Container>
    )
}