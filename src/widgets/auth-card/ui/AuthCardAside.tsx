import { Flex, List, Text, Title } from "@mantine/core";
import classes from "../css/AuthCard.module.css"
import { LightningIcon, ShieldCheckIcon, UsersIcon } from "@phosphor-icons/react";

export function AuthCardAside() {
    return (
        <Flex
            className={classes.card__aside}
            direction="column"
            gap="xl"
            maw={420}
        >
            <Flex
                direction="column"
                gap={4}
            >
                <Title
                    order={2}
                >
                    Оценивайте сайты.
                </Title>

                <Title
                    order={2}
                >
                    Делитесь мнением.
                </Title>

                <Title
                    order={2}
                >
                    Помогайте другим.
                </Title>
            </Flex>

            <Text>
                Присоединяйтесь к сообществу и находите лучшие сайты в интернете.
            </Text>

            <List
                ps={0}
            >
                <List.Item
                    icon={
                        <UsersIcon size={32} />
                    }
                    mb={20}
                >
                    <Title
                        order={3}
                    >
                        Честные отзывы
                    </Title>
                    <Text>
                        Реальные мнения реальных пользователей.
                    </Text>
                </List.Item>

                <List.Item
                    icon={
                        <ShieldCheckIcon size={32} />
                    }
                    mb={20}
                >
                    <Title
                        order={3}
                    >
                        Объективные оценки
                    </Title>
                    <Text>
                        Оценивайте по важным для вас критериям.
                    </Text>
                </List.Item>

                <List.Item
                    icon={
                        <LightningIcon size={32} />
                    }
                    mb={20}
                >
                    <Title
                        order={3}
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