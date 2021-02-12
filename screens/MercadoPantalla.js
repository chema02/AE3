import React,{Component} from 'react';
import {
    
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {MercadoComponent} from '../components/MercadoComponent'
import {SeparadorLista} from '../components/SeparadorLista'

 export default class MercadoPantalla extends Component{
     constructor(props){
         super(props);
         this.state ={mercadoMostrar:[
             {tipo:'over',evento:'valencia catarrocha',dinero:'50000'},
             {tipo:'under',evento:'mapet oliver',dinero:'100'},
             {tipo:'over',evento:'ceuta albacete',dinero:'555'},
             {tipo:'under',evento:'melilla emiratos arabes',dinero:'5000000'},
             {tipo:'over',evento:'espinete donpinpong',dinero:'25'}
         ]}
     }
    render(){
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <View style={styles.body}>
                    <View style={styles.seccionContainer}>
                        <Text style={styles.seccionTitulo}>Mercado Pantalla</Text>
                    </View>
               
                <View style={{height: 300}}>
                    <FlatList
                        data={this.state.mercadoMostrar}
                        keyExtractor={(item,index)=> index.toString()}
                        style={{padding: 10}}
                        renderItem={(item)=>(<MercadoComponent mercadoMostrar={item}/>)}
                        ItemSeparatorComponent={()=>(<SeparadorLista/>)}
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
        marginTop:32,
        paddingHorizontal:24,
    },

    seccionTitulo:{
        fontSize:24,
        fontWeight:'300',
        color:'black',
    },
        
    
});