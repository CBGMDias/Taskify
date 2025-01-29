import { View, Text } from "react-native"

import { s } from "./styles"

export function HomeTasks() {

    return (
        <View>
            <Text style={s.titleDark}> Tarefas programadas para o dia: </Text>

            <View style={{alignItems: "center"}}>
                <Text style={s.subtitleDark}> Nenhuma atividade programada.</Text>
            </View>
        </View>
    )
}