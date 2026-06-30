
import { useRegister } from "@/entities/auth/lib/useRegister";
import { Button, Checkbox, Flex, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";

export function RegisterForm() {
    const registerMutation = useRegister()

    const form = useForm({
        mode: "uncontrolled",

        initialValues: {
            username: '',
            email: '',
            password: '',
            confirm_password: ''
        },

        validate: {
            username: hasLength({ min: 3, max: 20 }),
            email: isEmail('Недействительный адрес электронной почты'),
            password: hasLength({ min: 8 }, 'Пароль должен состоять больше чем из 8 символов'),
            confirm_password: (value) => {
                if (value !== form.getValues().password) {
                    return 'Пароли не совпадают'
                }
            }
        }
    })

    return (
        <form
            onSubmit={form.onSubmit((values) => registerMutation.mutate(values))}
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
                        Создайте аккаунт
                    </Title>

                    <Text>
                        Присоединяйтесь к нашему сообществу! 🚀
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    gap="md"
                >
                    <TextInput
                        size="md"
                        withAsterisk
                        label="Имя пользователя"
                        placeholder="Введите имя пользователя"
                        key={form.key('username')}
                        {...form.getInputProps('username')}
                    />

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

                    <PasswordInput
                        size="md"
                        withAsterisk
                        label="Подтвердите пароль"
                        placeholder="Повторите пароль"
                        key={form.key('confirm_password')}
                        {...form.getInputProps('confirm_password')}
                    />


                    <Checkbox
                        label="Я принимаю условия пользовательского соглашения"
                    />
                </Flex>

                <Button
                    type="submit"
                    size="md"
                    fullWidth
                >
                    Зарегистрироваться
                </Button>
            </Flex>
        </form>
    )
}