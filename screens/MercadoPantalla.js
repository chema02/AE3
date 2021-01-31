import React,{Component} from 'react';
import {
    
    StyleSheet,

    View,
    Text,
    StatusBar,
} from 'react-native';

import {MercadoComponent} from '../components/MercadoComponent'

 export default class MercadoPantalla extends Component{
    render(){
        return (
            <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.body}>
            <Text style={{color:'red'}}>Mercado Pantalla</Text>
            <Text style={{color:'black'}} >Pantalla Mercado</Text>
            <MercadoComponent/>
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