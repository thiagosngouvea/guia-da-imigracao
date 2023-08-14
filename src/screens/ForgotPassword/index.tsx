import {
  Center,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
  View,
  Image,
  FormControl,
  Pressable,
  HStack,
  Button,
  Box,
} from "native-base";
import { MaterialIcons, Fontisto } from "@expo/vector-icons";
import Logo from "@assets/logo_tela_login.png";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/public.routes";
import { LinearGradient } from "expo-linear-gradient";

export function ForgotPassword() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  return (
    <VStack flex={1}>
      <LinearGradient
        colors={["#00B4DB", "#0083B0"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <Center flex={1} alignItems="center" marginTop={10}>
        <Image
          source={Logo}
          alt="Alternate Text"
          size="2xl"
          resizeMode="contain"
        />
        <Box mx="12">
          <Text color="white" fontSize="sm" textAlign="center" mt={3}>
            Insira o email que enviaremos um link (no seu email) para você
            cadastrar uma nova senha.
          </Text>
        </Box>
        <FormControl
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          <Stack space={2} w="100%" alignItems="center" mt={4}>
            <FormControl.Label
              _text={{
                color: "white",
                fontSize: "md",
                fontWeight: 600,
              }}
              alignSelf="flex-start"
            >
              Email
            </FormControl.Label>
            <Input
              borderWidth={2}
              rounded={10}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="mail" />}
                  size={5}
                  ml="2"
                  color="white"
                />
              }
              placeholder="Insira o seu email"
              placeholderTextColor={"white"}
            />
          </Stack>
          <HStack justifyContent="space-between" mt="4">
            <Button
              variant="outline"
              _text={{
                fontSize: "sm",
                fontWeight: "bold",
                color: "white",
              }}
              width="48%"
              rounded={20}
              borderWidth={2}
              onPress={() => navigation.navigate("SignIn")}
            >
              Voltar
            </Button>
            <Button
              variant="solid"
              bg={"cyan.500"}
              _text={{
                fontSize: "sm",
                color: "white",
                fontWeight: "bold",
              }}
              width="48%"
              rounded={20}
            >
              Enviar
            </Button>
          </HStack>
        </FormControl>
      </Center>
    </VStack>
  );
}
