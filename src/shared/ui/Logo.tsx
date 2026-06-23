import { Flex, Title, Image } from "@mantine/core";
import logo from "@/shared/assets/images/logo.webp"

export function Logo() {
    return (
        <Flex align="center">
            <Image
                src={logo}
                h={60}
                w={60}
            />

            <Title
                order={1}
                size="h1"
            >
                Рейтинг
            </Title>
        </Flex>
    )
}