/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
//#region import
//#region RN
import React, {useEffect, useState} from 'react';
//#endregion
//#region libs
import {
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//#endregion
//#region local files
import {DEVICE_OS} from '../utils/Constants';
import {TabBar} from './tabBar';
import HomeContainer from '../container/HomeContainer';
import {Provider, useDispatch, useSelector} from 'react-redux';
import configureStore from '../redux/store/store';
import { onGetCategoryData, onGetLastData, onGetMiddleData, onGetTopData } from '../redux/actions/AppActions';
import EmptlyContainer from '../container/EmptlyContainer';
import CategoryContainer from '../container/CategoryContainer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const store = configureStore();


const options = type => ({
  headerShown: false,
  gestureEnabled: DEVICE_OS === 'android' ? false : true,
});


function DashboardStackNavigator() {
  const dispatch = useDispatch()
  dispatch(onGetTopData(null,null))
  dispatch(onGetMiddleData(null,null))
  dispatch(onGetLastData(null,null))
  dispatch(onGetCategoryData(null,null))

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={({route}) => ({
        tabBarStyle: true,
      })}>
      <Tab.Screen name="HOME" component={HomeContainer} options={options} />
      <Tab.Screen name="CATEGORY" component={CategoryContainer} options={options} />
      <Tab.Screen name="CURATE" component={EmptlyContainer} options={options} />
      <Tab.Screen name="SALE" component={EmptlyContainer} options={options} />
      <Tab.Screen name="MORE" component={EmptlyContainer} options={options} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Dashboard'}>
          <Stack.Screen
            name={'Dashboard'}
            component={DashboardStackNavigator}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
