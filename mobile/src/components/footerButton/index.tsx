import { View, Text } from "react-native"
import { Button } from "@/components/button"

import { s } from "./styles"

type FooterButtonProps = {
  icon: React.ComponentType<any>
  text: string
  iconSize?: number
}

export function FooterButton({ icon: Icon, text, iconSize = 40 }: FooterButtonProps) {
  return (
    <View style={s.buttonContainer}>
      <Button style={s.button}>
        <Button.Icon icon={Icon} size={iconSize} />
      </Button>
      <Text style={s.buttonText}>{text}</Text>
    </View>
  )
}
