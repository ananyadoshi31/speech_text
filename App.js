
// *****************************************TEXT TO SPEECH**************************************************


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import * as Speech from 'expo-speech';
import React,{useState,useEffect} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function App() {
  const [name,setName]=React.useState("");

  

  // React.useEffect(listAllVoiceOptions);
  useEffect(()=>{
    const listAllVoiceOptions = async()=>{
      let voices = await Speech.getAvailableVoicesAsync(listAllVoiceOptions);
      console.log(voices);
    };

  },[]);

  const speakGreeting =()=>{
    const greeting = `Hello ${name}`;
    // options={};
    Speech.speak(greeting)
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} onChangeText={setName} value={name} 
        placeholder='Enter the text'
      />
      <Pressable
      style={styles.btn}
         onPress={speakGreeting}
      >
          <Text style={styles.text1}>SPEAK</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    alignSelf:'stretch',
    height:50,
    borderWidth:3,
    // borderBottomColor:'#2345',
    margin:10,
    padding:10,
  },
  btn:{
    backgroundColor:'#4467',padding:10, borderRadius:10,
  },
  text1:{
    fontSize:25,
    fontWeight:'bold',
  }
});




// ******************************************************SPEECH TO TEXT**********************************************





// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, Button, View } from 'react-native';
// import { useEffect, useState } from 'react';
// import Voice from '@react-native-voice/voice';


// export default function App() {
//   let [started, setStarted] = useState(false);
//   let [results, setResults] = useState([]);

//   useEffect(() => {
//     Voice.onSpeechError = onSpeechError;
//     Voice.onSpeechResults = onSpeechResults;

//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     }
//   }, []);

//   const startSpeechToText = async () => {
//     await Voice.start("en-US");
//     setStarted(true);
//   };

//   const stopSpeechToText = async () => {
//     await Voice.stop();
//     setStarted(false);
//   };

//   const onSpeechResults = (result) => {
//     setResults(result.value);
//   };

//   const onSpeechError = (error) => {
//     console.log(error);
//   };

//   return (
//     <View style={styles.container}>
//       {!started ? <Button title='Start Speech to Text' onPress={startSpeechToText} /> : undefined}
//       {started ? <Button title='Stop Speech to Text' onPress={stopSpeechToText} /> : undefined}
//       {results.map((result, index) => <Text key={index}>{result}</Text>)}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

