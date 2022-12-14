import React from 'react';
import { SchedulingComplete } from '../pages/SchedulingComplete';
import { Home } from '../pages/Home';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { CarDetails } from '../pages/CarDetails';
import { Scheduling } from '../pages/Scheduling';
import { SchedulingDetails } from '../pages/SchedulingDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen  name='Home' component={Home}/>
      <Screen  name='CarDetails' component={CarDetails}/>
      <Screen  name='Scheduling' component={Scheduling}/>
      <Screen  name='SchedulingDetails' component={SchedulingDetails}/>
      <Screen  name='SchedulingComplete' component={SchedulingComplete}/>
    </Navigator>
 )
}