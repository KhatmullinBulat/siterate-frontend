
import { useLogin } from "@/entities/auth";
import { Button, Checkbox, Flex, Group, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { Link } from "react-router";

export function LoginForm() {
    const loginMutation = useLogin()
    const form = useForm({
        mode: "uncontrolled",

        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: isEmail('Недействительный адрес электронной почты'),
            password: hasLength({ min: 8 }, 'Пароль должен состоять больше чем из 8 символов')
        }
    })

    return (
        <form
            onSubmit={form.onSubmit((values) => loginMutation.mutate(values))}
        >
            <Flex
                direction="column"
                gap="xl"
            >
                <Flex
                    direction="column"
                    gap={10}
                >
                    <Title>
                        Вход в аккаунт
                    </Title>

                    <Text>
                        Добро пожаловать обратно! 👋
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    gap="md"
                >
                    <TextInput
                        size="md"
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput
                        size="md"
                        withAsterisk
                        label="Пароль"
                        placeholder="Введите ваш пароль"
                        key={form.key('password')}
                        {...form.getInputProps('password')}
                    />

                    <Group
                        wrap="nowrap"
                        justify="space-between"
                    >
                        <Checkbox
                            label="Запомнить меня"
                        />

                        <Button
                            variant="transparent"
                            p={0}
                        >
                            Забыли пароль?
                        </Button>
                    </Group>
                </Flex>

                <Button
                    type="submit"
                    size="md"
                    fullWidth
                >
                    Войти
                </Button>

                <Group
                    wrap="nowrap"
                    justify="space-between"
                >
                    <Text
                        c="dimmed"
                    >
                        Ещё нет аккаунта?
                    </Text>

                    <Button
                        variant="transparent"
                        p={0}
                        component={Link}
                        to="/auth/register"
                    >
                        Зарегистрироваться
                    </Button>
                </Group>
            </Flex>
        </form>
    )
}