import React,{Component} from 'react';
import {
  
    StyleSheet,
   
    View,
    Text,
    StatusBar,
    Button,
    Icon,
} from 'react-native';

import {Card} from 'react-native-elements';


 export class MercadoComponent extends Component{
    render(){
        return (
            <>
            <StatusBar barStyle="dark-content" /> 
            <View style={styles.contenidor}  >
            <Card>
                <Card.Title>Usuarios</Card.Title>
                    <Card.Divider/>
  
                    <Text style={{marginBottom: 10}}>
        
                    </Text>
                        <Button
                            style={styles.seccio1}
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 5}}
                            title="Usuarios" />

                        <Button
                            style={styles.seccio2}
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 5}}
                            title="Apuestas" />

                        <Button
                            style={styles.seccio3}
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 5}}
                            title="Mercados" />

                        <Button
                            style={styles.seccio4}
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 5}}
                            title="Eventos" />

                            
  
            </Card>

            </View>
            </>
            );
    }
}

const styles = StyleSheet.create({

    contenidor: {
        flex: 1,
        flexDirection: 'column',

        borderWidth:5,
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