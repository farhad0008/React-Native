// when create drower need to import and download dependencies
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Text, View } from 'react-native'
import React, { Component } from 'react'
import About from './screen/About.jsx';
import Article from './screen/Article.jsx';
import Home from './screen/Home.jsx';

const Drawer = createDrawerNavigator();
const App = () => {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator>
                {/* <View><Text>helle</Text></View> */}
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Aricle" component={Article} />
                    <Drawer.Screen name="About" component={About} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App

// const styles = StyleSheet.create({})