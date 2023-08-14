import { createDrawerNavigator } from '@react-navigation/drawer';
import { PrivateRoutes } from './private.routes';
import { DrawerContent } from '@components/DrawerContent';

const Drawer = createDrawerNavigator();

import { Text, View } from 'native-base';

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{ 
        headerShown: false,
        drawerStyle: {
          width: '80%',
        },
        drawerType: 'front',
        drawerPosition: 'left',
      }}
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name="PrivateRoutes" component={PrivateRoutes} />
    </Drawer.Navigator>
  );
}