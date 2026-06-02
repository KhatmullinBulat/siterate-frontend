import { useForm } from "@mantine/form"
import { ActionIcon, Flex, Input } from "@mantine/core";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function HeaderSearch() {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            search: ''
        },
    })

    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Flex>
                <Input
                    size="md"
                    inputSize="50"
                    placeholder="Поиск сайтов"
                    key={form.key('search')}
                    {...form.getInputProps('search')}
                    rightSectionPointerEvents="all"
                    rightSection={
                        <ActionIcon
                            variant="subtle"
                            size="lg"
                            type="submit"
                        >
                            <MagnifyingGlassIcon size={22} />
                        </ActionIcon>
                    }
                />
            </Flex>
        </form>
    )
}