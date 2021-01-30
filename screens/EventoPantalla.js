import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
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
            <Text style={{color:'red'}}>Home Pantalla</Text>
            <Text style={{color:'black'}} >Pantalla Home</Text>
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