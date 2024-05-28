import React from "react";
import CadastroJogos from "./src/screens/CadastroJogos";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import JogosListagem from "./src/screens/ListagemJogos";
import ListagemJogos from "./src/screens/ListagemJogos";
import AtualizarJogos from "./src/screens/EditarJogos";

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Cadastro' component={CadastroJogos} options={{headerShown: false}}/>
    <Stack.Screen name='Listagem' component={ListagemJogos} options={{headerShown: false}}/>
    <Stack.Screen name='Editar' component={AtualizarJogos} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App;