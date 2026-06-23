
import { useLogin } from "@/entities/auth";
import { Button, Checkbox, Group, PasswordInput, TextInput } from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";

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
            <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                key={form.key('email')}
                {...form.getInputProps('email')}
            />

            <PasswordInput
                withAsterisk
                label="Пароль"
                placeholder="Введите ваш пароль"
                key={form.key('password')}
                {...form.getInputProps('password')}
            />

            <Group
                wrap="nowrap"
            >
                <Checkbox
                    label="Запомнить меня"
                />

                <Button
                    variant="transparent"
                >
                    Забыли пароль?
                </Button>
            </Group>

            <Button
                type="submit"
            >
                Войти
            </Button>
        </form>
    )
}