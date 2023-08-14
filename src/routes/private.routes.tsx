import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useNavigation } from "@react-navigation/native";

import React from "react";

import { Home } from "@screens/Home";
import { RegisterUpdate } from "@screens/RegisterUpdate";
import { FamilyGroup } from "@screens/FamilyGroup";
import { Warnings } from "@screens/Warnings";
import { WarningSingle } from "@screens/Warnings/Single";
import { Releases } from "@screens/Releases";

export type AppRoutes = {
  Home: undefined;
  RegisterUpdate: undefined;
  FamilyGroup: undefined;
  Warnings: undefined;
  AcessKey: undefined;
  Camera: undefined;
  Deliveries: undefined;
  Ocurrences: undefined;
  Panic: undefined;
  Phone: undefined;
  Questions: undefined;
  Releases: undefined;
  Reservations: undefined;
  WarningSingle: { data: any }
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

// const Drawer = createDrawerNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      RegisterUpdate: undefined;
      FamilyGroup: undefined;
      Warnings: undefined;
      AcessKey: undefined;
      Camera: undefined;
      Deliveries: undefined;
      Ocurrences: undefined;
      Panic: undefined;
      Phone: undefined;
      Questions: undefined;
      Releases: undefined;
      Reservations: undefined;
      WarningSingle: { data: any }
    }
  }
}

export function PrivateRoutes() {
  const navigation = useNavigation();

  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="RegisterUpdate" component={RegisterUpdate} />
        <Screen name="FamilyGroup" component={FamilyGroup} />
        <Screen name="Warnings" component={Warnings} />
        <Screen name="WarningSingle" component={WarningSingle} />
        <Screen name="Releases" component={Releases} />
      </Navigator>
    </>
  );
}
