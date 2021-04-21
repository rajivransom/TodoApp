import React,{useState} from 'react';
import {Button, StyleSheet, Image, Alert, Keyboard, Text, FlatList, Vibration, View, ImageBackground, TouchableHighlight, TextInput, TouchableWithoutFeedback} from 'react-native';
import TodoItem from './components/todoitem';



import Header from './components/header';
import AddTodo from './components/addTodo';
const axios = require('axios');
export default function Myapp(){
    const [todos,setTodos]=useState([
        {text:'buy coffee',key:'1'},
        {text:'bath',key:'2'},
        {text:'Workout',key:'3'},
        {text:'study',key:'4'}
    ]);
    const submit=(text)=>{
        if(text.length > 3){
            setTodos((prevTodos)=>{
                return [{text:text,key:Math.random().toString()},...prevTodos]
            })
        }else{
            Alert.alert('Todos must be over 3 char long!')
            Vibration.vibrate()
        }

       };
    
    const presshandeler=(key)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(todo=>todo.key!=key)
            
        });

    };
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.Container}>
            <Header/>
            <View style={style.content}>
                <AddTodo submit={submit}/>
                
                <View style={style.list}>
                    <FlatList
                    data={todos}
                    renderItem={({item})=>(
                            <TodoItem presshandeler={presshandeler} item={item}/>
                    )}
                     />

                </View>

            </View>
            

        </View>
        </TouchableWithoutFeedback>
       
    )
   
   
   
    
    
};
     
const style=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#a8dadc',
        
        paddingTop:40,
        paddingHorizontal:20,
        alignContent:'center',
        //alignItems:'center',
    },
   
    content:{
       
        padding:40,
        
        flex:1,


    },
    list:{
        
        marginTop:20,
        
        flex:1,
    }
});