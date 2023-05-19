import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';



import Home from './src/screens/Home';








const App = () => {
  return (
<Home/>



  );
};

const styles = StyleSheet.create({
  root: {
    //if we can remove flex from root we have to remove any flex in another screen to keep a design 
   
    backgroundColor: '#f9fbfc',

  },
});


export default App;