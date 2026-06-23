import { ENDPOINTS } from "@/entities/auth/config/endpoints";
import { loginSchema, type LoginCredentials, type LoginResponse } from "@/entities/auth/model/auth.types";
import { apiFetch } from "@/shared/api/client";

export const authApi = {
    login: (creds: LoginCredentials) =>
        apiFetch<LoginResponse>(
            ENDPOINTS.LOGIN,
            loginSchema,
            {
                method: "POST",
                body: JSON.stringify(creds)
            }
        )
}