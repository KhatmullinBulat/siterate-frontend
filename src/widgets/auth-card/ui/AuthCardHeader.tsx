import { Logo } from "@/shared/ui/Logo";
import { Button, Flex, Group, Text } from "@mantine/core";
import { Link } from "react-router";

export function AuthCardHeader() {
    return (
        <Flex
            justify="space-between"
            direction="row"
            py={20}
        >
            <Logo />

            <Group>
                <Text>
                    Уже есть аккаунт?
                </Text>

                <Button
                    variant="subtle"
                    size="md"
                    component={Link}
                    to="/auth/login"
                >
                    Войти
                </Button>
            </Group>
        </Flex>
    )
}