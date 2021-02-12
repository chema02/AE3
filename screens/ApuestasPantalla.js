import React,{Component} from 'react';
import {
    
    StyleSheet,
   
    View,
    Text,
    StatusBar,
} from 'react-native';

import {ApuestaComponent} from '../components/ApuestaComponent'

 export default class ApuestasPantalla extends Component{
    render(){
        return (
            <View>
            <StatusBar barStyle="dark-content" />
            <View style={styles.body}>
            <Text style={{color:'red'}}>Apuestas Pantalla</Text>
            <Text style={{color:'black'}} >Pantalla Apuestas</Text>
            <ApuestaComponent/>
            </View>
            </View>
            );
    }
};

const styles = StyleSheet.create({

    body: {
        backgroundColor : 'white',
    },
        
    
});