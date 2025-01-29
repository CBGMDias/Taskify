import React, { useState, useEffect, useRef } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import moment from "moment"

import { s } from "./styles"

interface DatePickerProps {
    onDateSelect: (date: string) => void
}

export const DayPicker: React.FC<DatePickerProps> = ({ onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"))
    const flatListRef = useRef<FlatList>(null)

    const ITEM_WIDTH = 80 // Largura de cada item (ajuste conforme necessário)

    const generateDates = () => {
        const today = moment();
        const dates = [];
        for (let i = -7; i <= 7; i++) {
            dates.push(today.clone().add(i, "days"))
        }
        return dates
    }

    const dates = generateDates()

    const todayIndex = dates.findIndex(
        (date) => date.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")
    )

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: todayIndex,
                animated: true,
                viewPosition: 0.5, // Centraliza o item
            })
        }
    }, [todayIndex])

    const handleSelect = (date: moment.Moment) => {
        setSelectedDate(date.format("YYYY-MM-DD"))
        onDateSelect(date.format("YYYY-MM-DD"))
    }

    return (
        <View style={s.container}>
            <FlatList
                ref={flatListRef}
                data={dates}
                keyExtractor={(item) => item.format("YYYY-MM-DD")}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={s.dateList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={[
                            s.dateContainer,
                            item.format("YYYY-MM-DD") === selectedDate && s.selectedDate,
                        ]}
                        onPress={() => handleSelect(item)}
                    >
                        <Text style={s.dayText}>{item.format("ddd")}</Text>
                        <Text style={s.dateText}>{item.format("DD")}</Text>
                    </TouchableOpacity>
                )}
                getItemLayout={(_, index) => ({
                    length: ITEM_WIDTH, // Largura do item
                    offset: ITEM_WIDTH * index, // Posição do item
                    index,
                })}
                initialScrollIndex={todayIndex} // Define a posição inicial ao carregar
                onScrollToIndexFailed={(info) => {
                    // Fallback para lidar com falhas no scroll
                    setTimeout(() => {
                        flatListRef.current?.scrollToIndex({
                            index: info.index,
                            animated: true,
                        })
                    }, 100)
                }}
            />
        </View>
    )
}