/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VitalsScreen from './src/screens/vitals';
import MeasureScreen from './src/screens/measure';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import colors from './src/styles/colors';
import {TextBig} from './src/components/texts';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BlankPage = () => {
  return (
    <View>
      <TextBig size="l" style={{marginTop: 50, textAlign: 'center'}}>
        Not available
      </TextBig>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Vitals"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let type = 'material';

            if (route.name === 'Home') {
              iconName = focused ? 'home-filled' : 'home-filled';
            } else if (route.name === 'Vitals') {
              iconName = focused ? 'insert-chart' : 'insert-chart-outlined';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'doctor' : 'doctor';
              type = 'fontisto';
            }
            return (
              <Icon name={iconName} size={size} color={color} type={type} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.primary,
          inactiveTintColor: colors.grey,
        }}>
        <Tab.Screen name="Home" component={BlankPage} />
        <Tab.Screen name="Vitals" component={Home} />
        <Tab.Screen name="Profile" component={BlankPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VitalsScreen"
        component={VitalsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MeasureScreen"
        component={MeasureScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;
