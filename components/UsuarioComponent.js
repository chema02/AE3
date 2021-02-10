import React,{Component} from 'react';
import {
  
    StyleSheet,
    TextInput,
    View,
    Text,
    StatusBar,
    Button,
    Icon,
} from 'react-native';

import {Card, Input} from 'react-native-elements';


 export class UsuarioComponent extends Component{
     constructor(props){
         super(props);
         this.state={
             nombre:'',
             apellidos: 'morales',
             edad: 46,
         }
     }
     guardanombre=(elnombre)=>{
         this.setState({nombre:elnombre})
     }
    render(){
        return (
            
            <View style={styles.contenidor}  >
                
                    <TextInput
                        placeholder='introduce tú nombre'
                        onChangeText={this.guardanombre}
                        >
                    </TextInput>
                    <Button title='holaaaa'></Button>
            

            </View>
            
            );
    }
}

const styles = StyleSheet.create({

    contenidor: {
        flex: 1,
        flexDirection: 'column',
      },
      seccio1: {
        flex: 1,
        borderColor:'red',
        borderWidth:3,
        fontSize: 12,
        fontWeight: '600',
        margin: 4,
        padding: 12,
        textAlign: 'right',
      },
      seccio2: {
        flex:1,
        borderColor:'green',
        borderWidth:3,
        fontSize: 12,
        fontWeight: '600',
        margin: 4,
        padding: 12,
        textAlign: 'center',
      }, 
 
      seccio3: {
        flex:1,
        borderColor:'blue',
        borderWidth:3,
        fontSize: 12,
        fontWeight: '600',
        margin: 4,
        padding: 12,
        textAlign: 'left',
      },
        

});