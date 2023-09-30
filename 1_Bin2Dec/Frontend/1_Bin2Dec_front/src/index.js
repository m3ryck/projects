import { useEffect, useState } from 'react';
import {  SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Convert from './service/convert';

export default function Home() {

  const [binValue,setBinValue] = useState()
  const [decValue,setDecValue] = useState(0)


  const Bin2Dec = async (value) => {
    const response = await Convert(value)
    console.log("decimal convertido: ",response)
    setDecValue(response)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.TextView}>{decValue}</Text>
        <TextInput style={styles.TextInput} placeholder='Insira o número binário' onChangeText={setBinValue}/>
        <TouchableOpacity style={styles.Button} onPress={()=>Bin2Dec(binValue)}>
          <Text style={styles.TextButton}>Converter</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput:{
    fontSize:18,
    padding: 10,
    marginBottom:20,
    borderColor: '#ccc',
    borderWidth:1,
    width: '70%',
    marginTop: 10
  },
  Button:{
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor:'#e0faff',
    paddingVertical:15,
    paddingHorizontal: 50,
    borderWidth:1,
    borderRadius: 3,
    elevation: 3,
  },
  TextButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  TextView: {
    alignSelf:'center',
    marginTop: 20,
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginBottom: 40
  },
  
});
