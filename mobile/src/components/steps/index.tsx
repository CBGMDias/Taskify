import { View, Text, useColorScheme } from "react-native"
import { IconCheck, IconClock, IconClipboardCheck } from "@tabler/icons-react-native"

import { s } from "./styles"
import { Step } from "../step"

export function Steps() {
  const colorScheme = useColorScheme()
  const titleStyle = colorScheme === 'light' ? s.titleLight : s.titleDark

  return (
    <View style={s.container}>
      <Text style={titleStyle}>Veja como funciona:</Text>

        <Step
        icon={IconCheck}
        title="Adicione uma nova tarefa"
        description="Crie uma tarefa com título, descrição e prazo para não esquecer o que precisa ser feito."
        />

        <Step
        icon={IconClock}
        title="Defina o prazo"
        description="Estabeleça um prazo para concluir sua tarefa e acompanhe o progresso para cumprir com o tempo determinado."
        />

        <Step
        icon={IconClipboardCheck}
        title="Marque como concluída"
        description="Marque as tarefas como concluídas quando finalizar, para manter sua lista de tarefas sempre organizada."
        />

    </View>
  )
}