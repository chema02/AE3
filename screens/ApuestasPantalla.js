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
                        <Text style={styles.seccionTitulo} >Pantalla Apuestas</Text>
                        <ApuestaComponent/>
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