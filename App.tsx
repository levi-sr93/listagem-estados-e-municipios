import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/Home';
import { City } from './src/screens/City';

const StackNavigator = createNativeStackNavigator()

export default function App(){
    return (
        <NavigationContainer>
            <StackNavigator.Navigator screenOptions={{
                headerTitleAlign: 'center',
            }}>
                <StackNavigator.Screen name="Home" component={Home} />
                <StackNavigator.Screen name="City" component={City} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}