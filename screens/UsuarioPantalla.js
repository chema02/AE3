import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {UsuarioComponent} from '../components/UsuarioComponent';

 export default class UsuarioPantalla extends Component{
    render(){
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <View>
                    <Text style={styles.seccionTitulo} >Pantalla Usuario</Text>
                    <UsuarioComponent/>
                </View>

            </View>
            );
    }
}

const styles = StyleSheet.create({

    body: {
        backgroundColor : 'white',
    },
    seccionTitulo:{
        fontSize:24,
        fontWeight:'300',
        color:'black',
        textAlign:'center',
        marginTop:12,
        marginBottom:10,
    },   
    
});