import { Image, View } from "react-native"
import { IconHome, IconBook } from "@tabler/icons-react-native"

import { FooterButton } from "@/components/footerButton"

import { s } from "./styles"

export function Footer() {

    return (
        <View style={s.container}>
            <View style={s.buttonsContainer}>
                <FooterButton icon={IconHome} text="Início" />
                <FooterButton icon={IconBook} text="Tarefas" />
            </View>
        </View>
    )
}