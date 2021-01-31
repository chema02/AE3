import React,{Component} from 'react';
import {
  
    StyleSheet,

    View,
    Text,
    StatusBar,
} from 'react-native';

import {UsuarioComponent} from '../components/UsuarioComponent'

 export default class UsuarioPantalla extends Component{
    render(){
        return (
            <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.body}>
            <Text style={{color:'red'}}>Usuaria Pantalla</Text>
            <Text style={{color:'black'}} >Pantalla Usuario</Text>
            <UsuarioComponent/>
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