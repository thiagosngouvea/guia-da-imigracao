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
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, Entypo, Ionicons, Fontisto, Feather } from "@expo/vector-icons";
import Logo from "@assets/logo_tela_login.png";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/public.routes";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function Register() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [show, setShow] = useState(false);
  return (
    <VStack flex={1}>
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
      <View position="absolute" top={8} left={2}>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <View flexDirection="row">
            <Icon
              as={<MaterialIcons name="keyboard-arrow-left" />}
              size={8}
              ml="2"
              color="white"
            />
            <Text color="white" fontSize="sm" alignSelf={"center"}>
              Voltar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Center flex={1} alignItems="center" marginTop={10}>
        <Box
          alignSelf="flex-start"
          flexDirection={"row"}
          pl="5"
        >
          <Text color="white">Registrar-se em </Text>
          <Text color="white" bold>iConnect Mobile</Text>
        </Box>
        <FormControl
          w={{
            base: "90%",
            md: "25%",
          }}
        >
          <Stack space={2} w="100%" alignItems="center" mt={4}>
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
              placeholder="Email"
              placeholderTextColor={"white"}
            />
            <Input
              borderWidth={2}
              rounded={10}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="white"
                />
              }
              placeholder="Nome Completo"
              placeholderTextColor={"white"}
            />
            <Input
              borderWidth={2}
              rounded={10}
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="building" />}
                  size={5}
                  ml="2"
                  color="white"
                />
              }
              placeholder="Condomínio"
              placeholderTextColor={"white"}
            />
            <Input
              borderWidth={2}
              rounded={10}
              InputLeftElement={
                <Icon
                  as={<Entypo name="v-card" />}
                  size={5}
                  ml="2"
                  color="white"
                />
              }
              placeholder="RG"
              placeholderTextColor={"white"}
            />
            <Input
              borderWidth={2}
              rounded={10}
              InputLeftElement={
                <Icon
                  as={<MaterialCommunityIcons name="id-card" />}
                  size={5}
                  ml="2"
                  color="white"
                />
              }
              placeholder="CPF"
              placeholderTextColor={"white"}
            />
            <Input
              borderWidth={2}
              rounded={10}
              InputLeftElement={
                <Icon
                  as={<Ionicons name="md-phone-portrait-sharp" />}
                  size={5}
                  ml="2"
                  color="white"
                />
              }
              placeholder="Telefone"
              placeholderTextColor={"white"}
            />
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
              placeholder="Senha"
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
          <HStack justifyContent="space-between" mt="4">
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <View
                    bg={"white"}
                    rounded={200}
                    p="4"
                >
                    <Entypo name="camera" size={24} color="#000" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <View
                    bg={"white"}
                    rounded={200}
                    p="4"
                >
                    <Feather name="paperclip" size={24} color="#000" />
                </View>
              </TouchableOpacity>
            </HStack>
            <Button
                bg="cyan.400"
                mt="4"
                rounded={10}
                onPress={() => navigation.navigate("SignIn")}
            >
                <Text color="white" bold>Registrar-se</Text>
            </Button>
        </FormControl>
      </Center>
    </VStack>
  );
}
