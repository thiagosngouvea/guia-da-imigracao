import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import Logo from "@assets/logo_tela_login.png";
import { AppNavigatorRoutesProps } from "@routes/public.routes";
import { AppNavigatorRoutesProps as AppNavigatorPrivateRoutesProps } from "@routes/private.routes";
import { useAuthStore } from "@context/auth";
import { LinearGradient } from 'expo-linear-gradient';


export function SignIn() {

  const [show, setShow] = useState(false);

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const navigationPrivate = useNavigation<AppNavigatorPrivateRoutesProps>();

  const { updateUser, user } = useAuthStore();

  return (
    <VStack
      flex={1}
    >
      <LinearGradient
        colors={['#00B4DB', '#0083B0']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      />
      <Box
        flex={1}
        alignItems="center"
      >
        <Center
          flex={1}
        >
        <Image
          source={Logo}
          alt="Alternate Text"
          size="2xl"
          resizeMode="contain"
        />
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
            <FormControl.Label
              _text={{
                color: "white",
                fontSize: "md",
                fontWeight: 600,
              }}
              alignSelf="flex-start"
            >
              Password
            </FormControl.Label>
            <Input
              rounded={10}
              borderWidth={2}
              InputLeftElement={
                <Icon
                  as={<Fontisto name="unlocked" />}
                  size={5}
                  ml="2"
                  color="white"
                />
              }
              placeholder="Insira a sua senha"
              placeholderTextColor={"white"}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="white"
                  />
                </Pressable>
              }
            />
          </Stack>
          <HStack justifyContent="flex-end">
            <Button
              variant="unstyled"
              _text={{
                fontSize: "sm",
                fontWeight: 500,
                color: "white",
              }}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Esqueceu a senha?
            </Button>
          </HStack>
          <HStack justifyContent="space-between">
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
              onPress={() => navigation.navigate("Register")}
            >
              Cadastrar
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
              onPress={() => {
                updateUser({
                  id: 1,
                  nome: "Thiago",
                  token: "123",
                });
                navigationPrivate.navigate("Home");
              }}
            >
              Entrar
            </Button>
          </HStack>
        </FormControl>
                  
        </Center>
      </Box>
    </VStack>
  );
}
