import React,{Component} from 'react';
import {
    
    StyleSheet,
   
    View,
    Text,
    StatusBar,
} from 'react-native';

import {ApuestasComponent} from '../components/ApuestasComponent'

 export default class ApuestasPantalla extends Component{
    render(){
        return (
            <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.body}>
            <Text style={{color:'red'}}>Apuestas Pantalla</Text>
            <Text style={{color:'black'}} >Pantalla Apuestas</Text>
            <ApuestasComponent/>
            </View>
            </>
            );
    }
};

const styles = StyleSheet.create({

    body: {
        backgroundColor : 'white',
    },
        
    
});