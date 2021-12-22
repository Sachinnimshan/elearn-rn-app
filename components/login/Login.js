import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import FieldInput from '../Forms/FieldInput';
import Submit from '../Forms/Submit';


const Login = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.loginview}>
            <View style={styles.logincontainer}>
            <Text style={styles.loginTitle}>E - Learn Login</Text>
            <Image style={styles.loginimg} source={require('../../assets/loginbg.png')}/>
            <FieldInput placeholder="Enter your username" type="text"/>
            <FieldInput placeholder="Enter your password" type="password"/>
            <Submit title="Login"/>
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
export default Login

