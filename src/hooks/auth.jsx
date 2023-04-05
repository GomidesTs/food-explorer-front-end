import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    async function signIn({ email, password }) {
        try {
            setLoading(true)

            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            localStorage.setItem('@foodExplorer:user', JSON.stringify(user))
            localStorage.setItem('@foodExplorer:token', token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
            setLoading(false)
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível entrar.')
            }

            setLoading(false)
        }
    }

    function signOut() {
        localStorage.removeItem('@foodExplorer:user')
        localStorage.removeItem('@foodExplorer:token')

        setData({})
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            if (avatarFile) {
                setLoading(true)

                const fileUpdateForm = new FormData()

                fileUpdateForm.append('avatar', avatarFile)

                const response = await api.patch('/users/avatar', fileUpdateForm)

                user.avatar = response.data.avatar
            }


            await api.put('/users', user)

            localStorage.setItem('@foodExplorer:user', JSON.stringify(user))
            
            alert('Perfil atualizado com sucesso!')

            setLoading(false)
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível atualizar o perfil.')
            }

            setLoading(false)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('@foodExplorer:token')
        const user = localStorage.getItem('@foodExplorer:user')

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            loading,
            setLoading,
            updateProfile,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }