import { useQuery } from "@tanstack/react-query"

export const userKeys = {
    all: ['user'] as const,
    current: () => [...userKeys.all, 'current'] as const
}

export function useUser() {
    return useQuery({
        queryKey: userKeys.current(),
        staleTime: 1000 * 60 * 10,
        retry: false
    })
}