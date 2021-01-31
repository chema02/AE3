import React,{Component} from 'react';
import {
    
    StyleSheet,
    
    View,
    Text,
    StatusBar,
} from 'react-native';

import {EventoComponent} from '../components/EventoComponent'

 export default class EventoPantalla extends Component{
    render(){
        return (
            <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.body}>
            <Text style={{color:'red'}}>Evento Pantalla</Text>
            <Text style={{color:'black'}} >Pantalla Evento</Text>
            <EventoComponent/>
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