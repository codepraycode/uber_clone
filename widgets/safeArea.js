import React from 'react';
import {StyleSheet,Platform,StatusBar,SafeAreaView} from 'react-native';


export default ({children,...rest})=>{
    return (
        <SafeAreaView style={styles.safeArea} {...rest}>
            {children}
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    safeArea:{
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})