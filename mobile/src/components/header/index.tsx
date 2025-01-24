import { Image, View } from "react-native"
import { IconDots, IconCalendarWeek } from "@tabler/icons-react-native"

import { Button } from "@/components/button"

import { s } from "./styles"

export function Header() {

    return (
        <View style={s.container}>
            <Image source={require("@/assets/logo-taskify.png")} style={s.logo} />

            <View style={s.buttonsContainer}>
                <Button style={s.button}>
                    <Button.Icon icon={IconCalendarWeek} size={35} />
                </Button>

                <Button style={s.button}>
                    <Button.Icon icon={IconDots} size={35} />
                </Button>
            </View>
        </View>
    )
}