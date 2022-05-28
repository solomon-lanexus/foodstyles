import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { CardsScreen } from "@foodstyles/navigation/MainStack/screens/CardsScreen";
import useFonts from "@foodstyles/hooks/useFonts";
import store from "@foodstyles/redux/configureStore";
import { AppStackPages } from "@foodstyles/navigation/MainStack/MainStack.types";
const Stack = createStackNavigator();
export default function App() {
  if (__DEV__) {
    import("./reactotron-config");
  }

  const LoadFonts = async () => {
    await useFonts();
    console.log("fonts loaded");
  };

  useEffect(() => {
    LoadFonts();
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider theme={undefined}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="CardsScreen"
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}
          >
            <Stack.Screen
              name={AppStackPages.CardsScreen}
              component={CardsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
