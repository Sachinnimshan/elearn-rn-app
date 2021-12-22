import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './components/screens/Register';
import AddCourse from './components/screens/AddCourse';


const App =() => {
  const stack = createStackNavigator();
  return (
   <NavigationContainer>
     <stack.Navigator>
       <stack.Screen name='Login' component={AddCourse}
       options={{
         headerShown: false
       }} />
       <stack.Screen name='Register' component={Register}
       options={{
         headerShown: false
       }} />
     </stack.Navigator>
     
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer:{
    width: '100%'
  }
})



export default App;
