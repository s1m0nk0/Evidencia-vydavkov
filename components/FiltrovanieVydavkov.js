import {StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import { GlobalStyles } from "../constant/styles";
import {inputHandler} from './ZobrazenieVydavkov';
export default function FiltrovanieVydavkov() {

    return <TextInput onChangeText={inputHandler} style={styles.input} placeholder="Filtrovať výdavky"/>;     
}
const styles = StyleSheet.create({
    
  input: {
    borderwidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    padding: 10,
    marginVertical: 16,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});