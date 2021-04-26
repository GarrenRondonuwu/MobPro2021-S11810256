import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SplashScreen = ({Navigation}) => {
    useEffect[]=>{
        setTimeout[() =>{
            navigation.replace{'SignIn'};
        }, 3000];
    }; []};

    return (
        <View style={styles.page}>
            <Logo/>
            <Text style={styles.text}>Exercise - 8</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundcolour: '#02CFBE ',
        alignItems: "center",
        justifyContent: 'center',
    },
    text: {
        fontSize : 32,
        fontFamily: 'Poppins=Medium',
    }
});
