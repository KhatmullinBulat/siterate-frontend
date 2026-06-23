import { Flex, Group } from "@mantine/core";
import classes from "../css/AuthCard.module.css"
import { AuthCardHeader } from "@/widgets/auth-card/ui/AuthCardHeader";
import { AuthCardAside } from "@/widgets/auth-card/ui/AuthCardAside";
import { AuthCardFooter } from "@/widgets/auth-card/ui/AuthCardFooter";
import type { Props } from "@/widgets/auth-card/types/auth-card.types";

export function AuthCard({ children }: Props) {
    return (
        <Flex
            className={classes.card}
            gap="xs"
            direction="column"
        >
            <AuthCardHeader />

            <Group
                wrap="nowrap"
            >
                <AuthCardAside />

                {children}
            </Group>

            <AuthCardFooter />
        </Flex>
    )
}