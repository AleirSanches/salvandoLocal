import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NotaEditor from "./src/componetes/NotaEditor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from 'react';

const [notas, setNotas] = useState([])


async function mostrarNotas(){
  const todasChaves = await AsyncStorage.getAllKeys()
  const todasNotas = await AsyncStorage.multiGet(todasChaves)
  setNotas(todasNotas)
  console.log(notas)

}

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <NotaEditor/>
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})

