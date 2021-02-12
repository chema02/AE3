import React,{Component} from 'react';
import {
  
    StyleSheet,
    TextInput,
    View,
    Button,
    Text,
    StatusBar,
} from 'react-native';

import {UsuarioComponent} from '../components/UsuarioComponent';
import {HomeComponent} from '../components/HomeComponent';

 export default class UsuarioPantalla extends Component{
    render(){
        return (
            <View>
            <StatusBar barStyle="dark-content" />
            <View style={styles.body}>
                <Text style={{color:'red'}}>Usuaria Pantalla</Text>
                <Text style={{color:'black'}} >Pantalla Usuario</Text>
                <UsuarioComponent/>
             
              <View style={styles.contenidor}  >

                

        </View>

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