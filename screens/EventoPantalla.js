import React,{Component} from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {EventoComponent} from '../components/EventoComponent'

 export default class EventoPantalla extends Component{
    constructor(props){
        super(props)

        this.state={
            mostrarDatos:[{partido:'Valencia contra Catarrocha'},
                          {partido:'Albacete contra Ceuta'},
                          {partido:'Betis contra Almeria'},
                          {partido:'Cordoba contra Marte'},
                          {partido:'Mapet contra Oliber'},
                       ]
        }
    }
    render(){
        return (
        <View>
            <StatusBar barStyle="dark-content" />
            <View style={styles.body}>
                <View style={styles.seccionContainer}>
                    <Text style={styles.seccionTitulo}>Evento Pantalla</Text>
                </View>
                <View style={{height:300}}>
                    <FlatList
                        data={this.state.mostrarDatos}
                        keyExtractor={(item,index)=>index.toString()}
                        style={{padding:5}}
                        renderItem={(item)=>(<EventoComponent elementoMostrar={item}/>)}
                    />
                   
                </View>
             </View>   
        </View>   
            );
    }
}

const styles = StyleSheet.create({

    body: {
        backgroundColor : 'white',
    },

    seccionContainer:{
        marginTop : 32,
        paddingHorizontal:24,
        fontSize: 50,
    },
    
    seccionTitulo:{
        fontSize : 24,
        fontWeight: '600',
        color: 'black',
    },
        
    
});