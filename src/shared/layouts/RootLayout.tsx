import { HeaderSearch } from "@/features/layouts/HeaderSearch";
import { AppShell, Burger, Button, Flex, Group, Image, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import { PlusIcon, UserIcon } from "@phosphor-icons/react"
import logo from "@/shared/assets/images/logo.webp"
import { Navbar } from "@/widgets/layouts/Navbar";

export default function RootLayout() {

    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            padding="md"
            header={{ height: { base: 60, md: 70, lg: 80 } }}
            navbar={{
                width: { base: 200, md: 300, },
                breakpoint: "sm",
                collapsed: { mobile: !opened }
            }}
            aside={{
                width: 400,
                breakpoint: "md",
                collapsed: { desktop: false, mobile: true }
            }}
        >
            <AppShell.Header>
                <Group h="100%" px="md" justify="space-between">
                    <Group>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />

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
                    </Group>

                    <HeaderSearch />

                    <Group>
                        <Button size="md" leftSection={<PlusIcon size={22} />}>
                            Оценить сайт
                        </Button>

                        <Button variant="subtle" size="md" leftSection={<UserIcon size={22} />}>
                            Войти
                        </Button>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Navbar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

            <AppShell.Aside p="md">
                Aside
            </AppShell.Aside>
        </AppShell>
    )
}