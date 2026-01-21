import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import SumaVydavkov from "./SumaVydavkov";
import ZoznamVydavkov from "./ZoznamVydavkov";
import FiltrovanieVydavkov from "./FiltrovanieVydavkov";
import { GlobalStyles } from "../constant/styles";
import { useState } from "react";

export default function ZobrazenieVydavkov({ vydavky, pocetDniVydavkov }) {
  const [search,setSearch]=useState('');
  function inputHandler(Text){
      setSearch(Text);
  }
  console.log(vydavky);
  const result=vydavky.filter((vydavok)=>vydavok.popis.includes(search));
  console.log(result);
  return (
    <View style={styles.container}>
      <SumaVydavkov vydavky={vydavky} pocetDni={pocetDniVydavkov} />
      <FiltrovanieVydavkov onInputChange={inputHandler} />
      <ZoznamVydavkov vydavky={result} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
