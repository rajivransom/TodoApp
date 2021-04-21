import React,{useState} from 'react';
import {Button, StyleSheet, Image, Alert, Text, FlatList, Vibration, View, ImageBackground, TextInput} from 'react-native';
export default function  AddTodo({submit}){
    const [text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val)

    }
    return(
    <View>
        
        <TextInput
        
        style={StyleSheet.input}
        placeholder='Add todo'
        onChangeText={changeHandler}/>
        <Button onPress={()=>submit(text)} title={'Add todo'} color='#f77f00' ></Button>
    </View>
    )
}
const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    }
})