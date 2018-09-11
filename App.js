import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import List from './List';
import Movie from './Movie';

export default createStackNavigator({
    Home: {
      screen: List,
    },
    Movie: {
      screen: Movie,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null,
    },
  });