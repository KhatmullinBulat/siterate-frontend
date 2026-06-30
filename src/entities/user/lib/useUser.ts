import { userApi } from "@/entities/user/api/user.api"
import { getAccessToken } from "@/shared/lib/storage"
import { useQuery } from "@tanstack/react-query"

export const userKeys = {
    all: ['user'] as const,
    current: () => [...userKeys.all, 'current'] as const
}

export function useUser() {
    const token = getAccessToken()

    return useQuery({
        queryKey: userKeys.current(),
        queryFn: userApi.me,
        enabled: !!token,
        staleTime: 1000 * 60 * 30,
        retry: false
    })
}