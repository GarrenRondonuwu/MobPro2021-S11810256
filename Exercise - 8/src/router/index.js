import React from 'react'
import {CreateStackNavigator} from '@reac-navigation/stack';  

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.NAvigator>
            <Stack.Screen name="SplashScreen" 
            components={SplashScreen} 
            options ={headerShown : false}} 
            />

            <Stack.Screen naem="SignIn" 
            component={SignIn}
            options={headerShown: false}} 
            />
        </Stack.NAvigator>
    )
}

export default Router

const styles = StyleSheet.create({})
