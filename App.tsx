import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NotaEditor from "./src/componetes/NotaEditor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";





export default function App() {

  const [notas, setNotas] = useState([])


  async function mostrarNotas(){
    const todasChaves = await AsyncStorage.getAllKeys()
    const todasNotas = await AsyncStorage.multiGet(todasChaves)
    setNotas(todasNotas);
    console.log(notas)
  
  }

  return (
    <SafeAreaView style={estilos.container}>
      <NotaEditor mostrarNotas={mostrarNotas} />
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

