import { env } from "@/shared/config/env";
import { getAccessToken } from "@/shared/lib/storage";
import { z } from "zod"

export async function apiFetch<T>(
    endpoint: string,
    schema: z.ZodType<T>,
    options?: RequestInit,
): Promise<T> {
    const headers = new Headers({
        "Content-Type": "application/json",
        ...options?.headers,
    })

    const token = getAccessToken()
    if (token) {
        headers.set("Authorization", `Bearear ${token}`)
    }

    const response = await fetch(`${env.apiUrl}${endpoint}`, {
        credentials: "include",
        headers: headers,
        ...options,
    })

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
    }

    const data: unknown = await response.json()

    return schema.parse(data)
}