import { authApi } from '@/entities/auth/api/auth.api'
import { setAccessToken } from '@/shared/lib/storage'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

export function useLogin() {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: authApi.login,
        onSuccess: async (data) => {
            await navigate('/')
            setAccessToken(data.accessToken)
        },
        onError: (error) => {
            console.error(error)
        }
    })
}