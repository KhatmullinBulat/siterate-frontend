import { Flex, List, Text, Title } from "@mantine/core";

export function AuthCardAside() {
    return (
        <Flex
            direction="column"
        >
            <Title
                order={1}
            >
                Оценивайте сайты.
                <br />
                Делитесь мнением.
                <br />
                Помогайте другим.
            </Title>

            <Text>
                Присоединяйтесь к сообществу и находите лучшие сайты в интернете.
            </Text>

            <List>
                <List.Item>
                    <Title
                        order={2}
                    >
                        Честные отзывы
                    </Title>
                    <Text>
                        Реальные мнения реальных пользователей.
                    </Text>
                </List.Item>

                <List.Item>
                    <Title
                        order={2}
                    >
                        Объективные оценки
                    </Title>
                    <Text>
                        Оценивайте по важным для вас критериям.
                    </Text>
                </List.Item>

                <List.Item>
                    <Title
                        order={2}
                    >
                        Лучшие сайты
                    </Title>
                    <Text>
                        Находите качественные сайты быстро и легко.
                    </Text>
                </List.Item>
            </List>
        </Flex>
    )
}