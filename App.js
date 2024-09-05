import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LogBox} from "react-native";
import Splash from './components/Splash';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Nanotech from './components/Nanotech';
import Nanomaterials from './components/Nanomaterials';
import Nanomedicine from './components/Nanomedicine';
import Cancer from './components/Cancer';
import Quiz from './components/Quiz';
import QuizTech from './components/QuizTech';
import QuizMate from './components/QuizMate';
import QuizMed from './components/QuizMed';
import QuizCancer from './components/QuizCancer';

import colors from './assets/colors/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

MaterialCommunityIcons.loadFont();
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  ])
  

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e85d04",
        tabBarInactiveTintColor: "#171717",
        //tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home2"
        component={Home}
        options={{
         // title: 'MyNanoria',
          //headerStyle: {
            //   backgroundColor: '#0b2c54',
               //width: '100%'
      //    },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'normal',
          },
          //headerLeft: ({color}) => (
         //   <Entypo name="menu" size={25} color={colors.white2} style={{left:5}} onPress={() => navigation.toggleDrawer()}></Entypo>
          //),
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={focused ? "#e85d04" : "#D1D3D2"}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
      //    title: 'MyNanoria',
      //    headerStyle: {
      //      backgroundColor: '#0b2c54',
      //    width: '100%'
      //   },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Quiz',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons name="brain"               
            color={focused ? "#e85d04" : "#D1D3D2"}
            size={26} />
          ),
        }}
      />
      {/*<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'MyNanoria',
          headerStyle: {
            backgroundColor: '#0b2c54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="contact-page" color={color} size={26} />
          ),
        }}
      />*/}
    </Tab.Navigator>
  );
};

const App = () => {

  return (       
    <NavigationContainer>               
    <Stack.Navigator>    
  <Stack.Screen
      name="Splash"
      component={Splash}
      options={{headerShown : false,}}
    />
     <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown : false,
    }}
    />   
    <Stack.Screen
      name="Register"
      component={Register}
      options={{headerShown : false,
    }}
  /> 
  <Stack.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerShown: false }}
      />  
    <Stack.Screen
      name="Home1"
      component={Home}
      options={{
        headerShown: false,
      }}
      //options={{title: 'My home'}}
      />
      <Stack.Screen
        name="Nanotech"
        component={Nanotech}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Nanomaterials"
        component={Nanomaterials}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Nanomedicine"
        component={Nanomedicine}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cancer"
        component={Cancer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizTech"
        component={QuizTech}
        options={{headerShown: false,
        backgroundColor: '#FFFFFF', 
        flex: 1,}}
      />
      <Stack.Screen
        name="QuizMate"
        component={QuizMate}
        options={{headerShown: false,
        backgroundColor: '#FFFFFF', 
        flex: 1,}}
      />
      <Stack.Screen
        name="QuizMed"
        component={QuizMed}
        options={{headerShown: false,
        backgroundColor: '#FFFFFF',
        flex: 1,}}
      /> 
        <Stack.Screen
        name="QuizCancer"
        component={QuizCancer}
        options={{headerShown: false,
        backgroundColor: '#FFFFFF',
        flex: 1,}}
      /> 
      </Stack.Navigator>      
     </NavigationContainer>  
     
  );
  
};

const styles = StyleSheet.create({
});

export default App;
