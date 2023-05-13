import { useState } from 'react'
import { RiArrowLeftSLine, RiUser3Line, RiLock2Line, RiEyeOffLine, RiEyeLine, RiCamera3Fill } from 'react-icons/ri'
import { TfiEmail } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Avatar, Form } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'

export function Profile() {
    const { user, updateProfile, loading } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleUpdate()
        }
    }

    function handleTogglePassword() {
        setShowPassword(!showPassword)
    }

    async function handleUpdate() {
        const updated = {
            name,
            email,
            oldPassword,
            password
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(e) {
        const file = e.target.files[0]

        if (file) {
            const imagePreview = URL.createObjectURL(file)

            setAvatarFile(file)
            setAvatar(imagePreview)
        }
    }

    return (
        <Container>

            <ButtonText
                title='Voltar'
                icon={RiArrowLeftSLine}
                onClick={handleBack}
            />
            <Content>
                <Avatar>
                    <img src={avatar} alt={`Foto do usuário ${user.name}`} />

                    <label htmlFor='avatar'>
                        <RiCamera3Fill />
                        <input
                            type='file'
                            id='avatar'
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Form autoComplete='off'>
                    <fieldset>
                        <legend>Editar perfil</legend>

                        <Input
                            id='name'
                            type='text'
                            icon={RiUser3Line}
                            placeholder='Exemplo: Tulio Gomides'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />

                        <Input
                            id='email'
                            type='text'
                            icon={TfiEmail}
                            placeholder='exemplo@exemplo.com.br'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />

                        <Input
                            id='passwordOld'
                            type={showPassword ? 'text' : 'password'}
                            icon={RiLock2Line}
                            placeholder='Senha atual'
                            onChange={e => setOldPassword(e.target.value)}
                        />

                        <Input
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            icon={RiLock2Line}
                            placeholder='Nova senha'
                            onChange={e => setPassword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />

                        <span onClick={handleTogglePassword}>
                            {
                                showPassword ?
                                    <span>
                                        Ocultar senha
                                        <RiEyeOffLine size={22} />
                                    </span>
                                    :
                                    <span>
                                        Mostrar senha
                                        <RiEyeLine size={22} />
                                    </span>
                            }
                        </span>

                        <Button
                            title={loading ? 'Salvando dados' : 'Salvar'}
                            onClick={handleUpdate}
                            disabled={loading}
                        />
                    </fieldset>
                </Form>

            </Content>
        </Container>
    )
}