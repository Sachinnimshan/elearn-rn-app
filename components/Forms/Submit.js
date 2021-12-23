import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

const Submit = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.btnsubmit} onPress={props.onPress}>
                <Text style={styles.btntitle}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles =  StyleSheet.create({
    btnsubmit:{
        padding: 15,
        fontSize: 18,
        width: '100%',
        backgroundColor: "#2196F3",
        borderRadius: 5,
        display: 'flex', alignItems: 'center',
        marginTop: 10
    },
    btntitle:{
        fontSize: 20,
        color: "white",
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default Submit
