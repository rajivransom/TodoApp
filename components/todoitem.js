import React from 'react';
import {Button, TouchableOpacity, StyleSheet, Image, Alert, Text, FlatList, Vibration, View, ImageBackground, TouchableHighlight, TextInput} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
export default function TodoItem({item,presshandeler}){
    return(
        <TouchableOpacity onPress={()=>presshandeler(item.key)}>
            <View style={styles.item}>
            <MaterialIcons name="delete" size={20} color="black" />


            <Text style={styles.itemt}>{item.text}</Text>
                

            </View>
            
        </TouchableOpacity>

    )
}
const styles=StyleSheet.create({
    item:{
        padding:18,
        
        marginTop:16,
        borderColor:'grey',
        borderWidth:5,
        borderStyle:'solid',
        borderRadius:10,
        backgroundColor:'#eae2b7',
        flex:1,
        flexDirection:'row',
       
      
    },
    itemt:{
        marginLeft:14,
        fontWeight:'bold',
        fontSize:20,
    }

});