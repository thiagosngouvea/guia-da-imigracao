import React, { useEffect, useState } from 'react';
import { useTheme, Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';

import { PublicRoutes } from './public.routes';
import { PrivateRoutes } from './private.routes';
import { DrawerRoutes } from './drawer.routes';
import { useAuthStore } from '@context/auth';


export function Routes() {
  const { colors } = useTheme();
  const [isLogged, setIsLogged] = useState(false);

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  const { recoveryAuth, user } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      const recoveryResult = await recoveryAuth();
      if (recoveryResult.success) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    };
    checkAuth();
  }, [user]);

  return (
    <Box flex={1} bg="white">
          <NavigationContainer theme={theme} ref={navigationRef}>
            {isLogged ? <DrawerRoutes /> : <PublicRoutes />}
            {/* <DrawerRoutes /> */}
          </NavigationContainer>
    </Box>
  );
}
