import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const FieldInput = (props) => {
    return (
        <View style={styles.txtfield}>
            <TextInput value={props.value} style={styles.inputfield} placeholder={props.placeholder}
            multiline={props.multiline} numberOfLines={props.numberOfLines}
            onChangeText={props.onChange} name={props.name}/>
        </View>
    );
}

const styles= StyleSheet.create({
    txtfield:{
        width: '100%'
    },
    inputfield: {
        width: '100%',
        fontSize: 18,
        borderWidth: 1,
        borderColor: "lightgray",
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        padding: 10,

    }
})

export default FieldInput;

