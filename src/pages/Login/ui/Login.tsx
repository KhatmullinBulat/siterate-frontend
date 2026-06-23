import { LoginForm } from "@/features/auth/login";
import { AuthCard } from "@/widgets/auth-card";
import { Center } from "@mantine/core";

export function LoginPage() {
    return (
        <Center
            flex={1}
        >
            <AuthCard>
                <LoginForm />
            </AuthCard>
        </Center>
    )
}