import { Button, Group, Text } from "@mantine/core";
import { Link } from "react-router";

export function AuthCardFooter() {
    return (
        <Group>
            <Text>
                © 2026 SiteRate
            </Text>

            <Button
                variant="subtle"
                size="md"
                component={Link}
                to="/"
            >
                О проекте
            </Button>

            <Button
                variant="subtle"
                size="md"
                component={Link}
                to="/"
            >
                Правила
            </Button>

            <Button
                variant="subtle"
                size="md"
                component={Link}
                to="/"
            >
                Контакты
            </Button>
        </Group>
    )
}