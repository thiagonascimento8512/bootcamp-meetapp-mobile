import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Meetups/Dashboard';
import ConfirmInscrition from './pages/Meetups/ConfirmInscrition';
import Profile from './pages/Profile';

import DashboardSubscribe from './pages/Subscription/DashboardSubscribe';
import CancelSubscribe from './pages/Subscription/CancelSubscribe';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Index: {
              screen: createStackNavigator({
                Dashboard,
                ConfirmInscrition,
              }),
              navigationOptions: {
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="event" size={20} color={tintColor} />
                ),
              },
            },
            Subscribes: {
              screen: createStackNavigator({
                DashboardSubscribe,
                CancelSubscribe,
              }),
              navigationOptions: {
                tabBarLabel: 'Inscrições',
                tabBarIcon: ({ tintColor }) => (
                  <Icon
                    name="assignment-turned-in"
                    size={20}
                    color={tintColor}
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.4)',
              style: {
                backgroundColor: '#2b1a2f',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
