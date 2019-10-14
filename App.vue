<template>
  <app-navigator></app-navigator>
</template>
<script>
import HomeScreen from './components/layouts/Home.vue';
import AccountScreen from './components/layouts/Account.vue';
import ShopScreen from './components/layouts/Shop.vue';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'vue-native-router';
const StackNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      header: null,
      navigationOptions: {
        headerVisible: false,
        title: 'Trang chủ',
      },
    },
    Shop: ShopScreen,
    Address: AccountScreen,
    Account: AccountScreen,
  },
  {
    initialRouteName: 'Shop',
    headerMode: 'none',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = "home";
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Shop') {
          iconName = `shopping-cart`;
        }else if (routeName === 'Address') {
          iconName = `map-marker`;
        }else{
          iconName = `user`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={focused?tintColor:"#54657E"} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#eb6641',
      inactiveTintColor: '#54657E',
    },
  },
  {},
);
const AppNavigator = createAppContainer(StackNavigator);
export default {
  components: {AppNavigator,Icon},
};
</script>
<style></style>
