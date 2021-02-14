import React,{Component} from 'react';
import {
    StyleSheet,
    StatusBar,
} from 'react-native';

import {HomeComponent} from '../components/HomeComponent';

 export default class HomePantalla extends Component{
    render(){
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <HomeComponent/>
            </View>
            );
    }
}

const styles = StyleSheet.create({

    body: {
        backgroundColor : 'white',
    },

     
    
});