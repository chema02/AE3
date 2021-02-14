import React,{Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { Input,Button} from 'react-native-elements';


 export class UsuarioComponent extends Component{
     constructor(props){
         super(props);
         this.state={
             nombre:'',
             apellidos: '',
             edad: '',
         }
     }
     guardaNombre=(elnombre)=>{
         this.setState({nombre:elnombre})
         console.log(elnombre)
     }
     guardaApellido=(elapellido)=>{
         this.setState({apellidos:elapellido})
         console.log(elapellido)
     }
     guardaEdad=(laedad)=>{
         this.setState({edad:laedad})
         console.log(laedad)
     }
    render(){

        return (
            
            <View>
                    <Input placeholder='Introduce nombre' onChangeText={this.guardaNombre} color='green'></Input>
                    <Input placeholder='Introduce tú apellido' onChangeText={this.guardaApellido} ></Input>
                    <Input placeholder='Introduce tú edad' onChangeText={this.guardaEdad} ></Input>
                    <Button title='Siguiente'></Button>
            </View>
            );
    }
}

const styles = StyleSheet.create({

    contenidor: {
        flex: 1,
        flexDirection: 'column',
      },
        

});