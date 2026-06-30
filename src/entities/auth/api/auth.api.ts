import { ENDPOINTS } from "@/entities/auth/config/endpoints";
import { loginSchema, registerSchema, type LoginCredentials, type LoginResponse, type RegisterCredentials, type RegisterResponse } from "@/entities/auth/model/auth.types";
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
        ),

    register: (creds: RegisterCredentials) =>
        apiFetch<RegisterResponse>(
            ENDPOINTS.REGISTER,
            registerSchema,
            {
                method: "POST",
                body: JSON.stringify(creds)
            }
        )
}