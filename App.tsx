import React from "react";
import CadastroJogos from "./src/screens/CadastroJogos";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import JogosListagem from "./src/screens/ListagemJogos";



function App(): React.ReactElement {
  return (
    <JogosListagem />
  );
}
export default App;