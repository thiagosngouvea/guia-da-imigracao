import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { Register } from '@screens/Register';
import { ForgotPassword } from '@screens/ForgotPassword';

type AppRoutes = {
    SignIn: undefined;
    ForgotPassword: undefined;
    Register: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            SignIn: undefined;
            ForgotPassword: undefined;
            Register: undefined;
        }
    }
}

export function PublicRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Register" component={Register} />
    </Navigator>
  );
}