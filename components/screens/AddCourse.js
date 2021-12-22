import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import FieldInput from '../Forms/FieldInput';
import Submit from '../Forms/Submit';

export class AddCourse extends PureComponent {
    render() {
        return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.addcourseview}>
            <View style={styles.addcoursecontainer}>
            <Text style={styles.addcourseTitle}>Add New Course</Text>
            <Image style={styles.addcourseimg} source={require('../../assets/loginbg.png')}/>
            <FieldInput placeholder="Enter Course Title" type="text"/>
            <FieldInput placeholder="Enter Course Description" multiline={true} numberOfLines={4}/>
            <Submit title="Save"/>
        </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    addcourseview:{
        flexGrow: 1
    },
    addcourseTitle:{
        fontSize: 30,
        textAlign: 'center',
        color: "#232F3E"
    },
    addcourseimg:{
        width: '100%',
        height: 200
    },
    addcoursecontainer:{
        width: '100%',
        padding: 25,
    },
});

export default AddCourse;
