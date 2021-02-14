import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

import {Badge} from 'react-native-elements';


 export class MercadoComponent extends Component{
     constructor(props){
         super(props);
     }

     elementoPulsado(unElementoDeLaListaPulsado){
         return(alert('Has seleccionado: ' + unElementoDeLaListaPulsado.evento))
     }

     verPulsado(){
         return alert('View')
     }

    render(){
        return (
            <Pressable elevation={5} onPress={this.verPulsado} style={{margin:5, borderRadius:5}}>
                <View style={{backgroundColor: 'blue', flexDirection: 'row', alignItems:'center', justifyContent: 'space-around'}}>
                    <View>
                        <Text style={StyleSheet.text}
                            onPress={this.elementoPulsado.bind(this, this.props.mercadoMostrar.item)}>
                                {this.props.mercadoMostrar.item.evento}
                            </Text>
                    </View>
                    <View>
                        <Text style={[styles.text,{color:'black'}]}>{this.props.mercadoMostrar.item.tipo}
                            <Badge value={this.props.mercadoMostrar.item.dinero + ' euros '} status="error"/>
                        </Text>
                    </View>
                </View>
            </Pressable>
        )
 
            
    }
}

const styles = StyleSheet.create({

    text: {
        color:'green',
        fontSize: 15,
        fontWeight:'bold',
        margin:10
      },
        

});