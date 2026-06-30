import { ENDPOINTS } from "@/entities/user/config/endpoints";
import { userSchema, type User } from "@/entities/user/model/user.types";
import { apiFetch } from "@/shared/api/client";

export const userApi = {
    me: () =>
        apiFetch<User>(
            ENDPOINTS.ME,
            userSchema,
            {
                method: "GET",
            }
        ),
}