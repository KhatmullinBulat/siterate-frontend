import { RegisterForm } from "@/features/auth/register";
import { AuthCard } from "@/widgets/auth-card";
import { Center } from "@mantine/core";

export function RegisterPage() {
    return (
        <Center
            flex={1}
        >
            <AuthCard>
                <RegisterForm />
            </AuthCard>
        </Center>
    )
}