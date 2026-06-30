import z from "zod"

export interface LoginCredentials {
    email: string
    password: string
}

export interface RegisterCredentials {
    username: string
    email: string
    password: string
}

export const loginSchema = z.object({
    accessToken: z.string(),
})

export const registerSchema = z.object({
    accessToken: z.string(),
})

export type LoginResponse = z.infer<typeof loginSchema>
export type RegisterResponse = z.infer<typeof registerSchema>