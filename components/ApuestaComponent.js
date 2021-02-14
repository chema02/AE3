import React,{Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import {Input,Button} from 'react-native-elements';


 export class ApuestaComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            equipolocal:'',
            equipovisitante: '',
            tipoapuesta:'',
            dineroapostado:'',
            
        }
    }
  
  guardaLocal=(local)=>{
      this.setState({equipolocal:local})
      console.log(local)
  }
  guardaVisitante=(visitante)=>{
      this.setState({equipovisitante:visitante})
      console.log(visitante)
  }
  guardaApuesta=(apuesta)=>{
      this.setState({tipoapuesta:apuesta})
      console.log(apuesta)
  }
  guardaDinero=(dinero)=>{
    this.setState({dineroapostado:dinero})
    console.log(dinero)
}
    render(){
        return (
            
            <View>
                    <Input placeholder='Introduce equipo local' onChangeText={this.guardaLocal}></Input>
                    <Input placeholder='Introduce equipo visitante' onChangeText={this.guardaVisitante} ></Input>
                    <Input placeholder='Introduce tipo de apuesta over/under' onChangeText={this.guardaApuesta} ></Input>
                    <Input placeholder='Introduce dinero apostado' onChangeText={this.guardaDinero} ></Input>
                    <Button title='Siguiente'></Button>
            </View>
            
            );
    }
}

const styles = StyleSheet.create({

    contenidor: {
        flex: 1,
        flexDirection: 'column',
        borderWidth:5,
      },
        

});