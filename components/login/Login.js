import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import FieldInput from '../Forms/FieldInput';
import Submit from '../Forms/Submit';
import axios from 'axios';

function Login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

      const InsertRecord=()=>{

        alert(email,password);
        //const checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
        if ((email === "") && (password === "")){
          alert("Required Field Is Missing!!!");
        }
        else{
          const signInURL = "http://192.168.1.3:5000/signin";
          ///var Data ={ email: email, password: password };
          axios.post(signInURL, { email: email, password: password })
          .then((response)=>{
             console.log(response.data)
          }).catch((error)=>{
             console.log(error);
          })
        }
    }
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.loginview}>
            <View style={styles.logincontainer}>
            <Text style={styles.loginTitle}>E - Learn Login</Text>
            <Image style={styles.loginimg} source={require('../../assets/loginbg.png')}/>
            <FieldInput placeholder="Enter your username" value={email} onChange={email=> setemail(email)} type="text"/>
            <FieldInput placeholder="Enter your password" value={password} onChange={password=> setpassword(password)} type="password"/>
            <Submit title="Login" onPress={InsertRecord}/>
            <Text style={styles.forgotlink}>Forgot password ?</Text>
        </View>
        </ScrollView>
        )
}

const styles = StyleSheet.create({

    loginview:{
        flexGrow: 1
    },
    loginTitle:{
        fontSize: 30,
        textAlign: 'center',
        color: "#232F3E"
    },
    loginimg:{
        width: '100%',
        height: 200
    },
    logincontainer:{
        width: '100%',
        padding: 25,
    },
    forgotlink:{
        textAlign: "right",
        marginTop: 10,
        fontSize: 15
    }
})

export default Login;

