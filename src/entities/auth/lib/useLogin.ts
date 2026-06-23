import { authApi } from '@/entities/auth/api/auth.api'
import { userKeys } from '@/entities/auth/lib/useUser'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

export function useLogin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: authApi.login,
        onSuccess: async (data) => {
            queryClient.setQueryData(userKeys.current(), data.user)
            await navigate('/')
        },
        onError: (error) => {
            console.error(error)
        }
    })
}