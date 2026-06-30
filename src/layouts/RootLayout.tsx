import { HeaderSearch } from "@/features/layouts/HeaderSearch";
import { AppShell, Burger, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router";
import { PlusIcon, UserIcon } from "@phosphor-icons/react"
import { Navbar } from "@/widgets/layouts/Navbar";
import { Logo } from "@/shared/ui/Logo";
import { useUser } from "@/entities/user/lib/useUser";

export default function RootLayout() {

    const [opened, { toggle }] = useDisclosure()

    const { data: user } = useUser()

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

                        <Logo />
                    </Group>

                    <HeaderSearch />

                    <Group>
                        <Button
                            size="md"
                            leftSection={<PlusIcon size={22} />}
                        >
                            Оценить сайт
                        </Button>

                        {
                            user ?
                                <Button
                                    variant="subtle"
                                    size="lg"
                                    leftSection={<UserIcon size={22} />}
                                >
                                    {user.username}
                                </Button>
                                :
                                <Button
                                    variant="subtle"
                                    size="md"
                                    leftSection={<UserIcon size={22} />}
                                    component={Link}
                                    to="/auth/login"
                                >
                                    Войти
                                </Button>
                        }
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