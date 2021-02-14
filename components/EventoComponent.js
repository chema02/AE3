import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

 export class EventoComponent extends Component{
     constructor(props){
         super(props)
     }
    render(){
        return (
            <View style={styles.body}>
                <View>
                    <Text style={{color:'green', fontSize:20,fontWeight:'bold',margin:5}}>{this.props.elementoMostrar.item.partido}</Text>
                </View>
            </View>
            );
    }
}

const styles = StyleSheet.create({

    body: {
        backgroundColor : 'white',
    },
        
    
});