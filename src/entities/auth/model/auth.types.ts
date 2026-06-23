import z from "zod"

export interface LoginCredentials {
    email: string
    password: string
}

const userSchema = z.object({
    id: z.number(),
    username: z.string(),
    email: z.email(),
    role: z.string()
})

export const loginSchema = z.object({
    accessToken: z.string(),
    user: userSchema,
})

export type User = z.infer<typeof userSchema>
export type LoginResponse = z.infer<typeof loginSchema>