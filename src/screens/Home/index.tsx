import { HStack, Text, VStack, View } from "native-base";
import { Header } from "@components/Header";
import { MenuItem } from "@components/MenuItem";
import { FontAwesome, AntDesign, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";

type MenuItemsProps = {
    titulo: string;
    icon?: any;
    sideColor?: string;
    backgroundColorIcon?: string;
    navigateTo?: "Warnings" | "AccessKey" | "Releases" | "Camera" | "Phone" | "Deliveries" | "Occurrences" | "Reservations" | "Questions" | "Panic";
    width?: string;
};


const MENU_ITEMS: MenuItemsProps[] = [
    {
        titulo: "Avisos",
        icon: <FontAwesome name="bell" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "Warnings"
    },
    {
        titulo: "Chave de Acesso",
        icon: <AntDesign name="qrcode" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "AccessKey"
    },
    {
        titulo: "Liberações",
        icon: <FontAwesome5 name="door-open" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "Releases"
    },
    {
        titulo: "Camera",
        icon: <FontAwesome name="video-camera" size={24} color="white" />,
        sideColor: "gray.500",
        navigateTo: "Camera"
    },
    {
        titulo: "Telefone",
        icon: <MaterialCommunityIcons name="phone-in-talk" size={24} color="white" />,
        sideColor: "gray.500",
        navigateTo: "Phone"
    },
    {
        titulo: "Entregas",
        icon: <FontAwesome5 name="box-open" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "Deliveries"
    },
    {
        titulo: "Ocorrências",
        icon: <MaterialCommunityIcons name="book-open-variant" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "Occurrences"
    },
    {
        titulo: "Reservas",
        icon: <FontAwesome5 name="calendar-alt" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "Reservations"
    },
    {
        titulo: "Dúvidas",
        icon: <FontAwesome5 name="question-circle" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "Questions"
    },
    {
        titulo: "Pânico",
        icon: <FontAwesome5 name="exclamation-triangle" size={24} color="white" />,
        sideColor: "red.600",
        backgroundColorIcon: "red.600",
        navigateTo: "Panic"
    },
]

export function Home() {
    return (
        <VStack
            flex={1}
            bg="white"
        >
            <Header titulo="Connect Mobile" headerType="start"/>
            <View
                flex={1}
                flexWrap="wrap"
                flexDirection="row"
                justifyContent="space-around"
                mt={-8}
            >
                {MENU_ITEMS.map((item, index) => (
                    <MenuItem 
                        key={index} 
                        titulo={item.titulo} 
                        icon={item.icon} 
                        sideColor={item.sideColor} 
                        backgroundColorIcon={item.backgroundColorIcon}
                        navigateTo={item.navigateTo}    
                        width="45%"
                    />
                ))}
            </View>
            <View position="absolute" bg="black" p="4" borderRadius={20} bottom={2} alignSelf="center">
                <MaterialCommunityIcons name="line-scan" size={60} color="white" />
            </View>
        </VStack>
    );
}