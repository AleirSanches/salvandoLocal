import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NotaEditor from "./src/componetes/NotaEditor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import {criaTabela} from "./src/sevicos/notas";


useEffect(()=>{
  criaTabela()
},[])


export default function App() {

  const [notas, setNotas] = useState([])


  async function mostrarNotas(){
   
    //setNotas(todasNotas);
   // console.log(todasNotas)
  
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

