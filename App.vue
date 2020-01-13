<template>
  <app-navigator></app-navigator>
</template>
<script>
import HomeScreen from './components/layouts/Home.vue';
import AccountScreen from './components/layouts/Account.vue';
import AddressScreen from './components/layouts/Address.vue';
import ShopScreen from './components/layouts/Shop.vue';
import Icon from 'react-native-vector-icons/FontAwesome';
import Detail from './components/details/index'
import Cart from './components/cart/index'
import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'vue-native-router';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Require cycle:','Accessing','Warning: PushNotificationIOS','Warning: CameraRoll','VirtualizedList: missing keys','Remote debugger is in','d:\VueNative\VueNative\node_modules\react-native\Libraries\Core\ExceptionsManager.js:94 Warning: React.createElement: type is invalid -- expected']);

const HomeStack = createStackNavigator({
  Home : {
      screen: HomeScreen,
      header: null,
      navigationOptions: {
        headerVisible: false,
        title: 'Trang chủ',
      },
    },
  Detail :{
     screen: Detail,
      header: null,
      navigationOptions: {
        headerVisible: false,
        // title: 'Trang chủ',
      },
  },
  Cart :{
     screen: Cart,
      header: null,
      navigationOptions: {
        headerVisible: false,
        // title: 'Trang chủ',
      },
  } 

},
{
   initialRouteName: 'Home',
    headerMode: 'none',
}
)
const HomeApp = createAppContainer(HomeStack)
const StackNavigator = createBottomTabNavigator(
  {
    Home: HomeApp,
    Shop: ShopScreen,
    Address: AddressScreen,
    Account:  AccountScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Shop') {
          iconName = `shopping-cart`;
        } else if (routeName === 'Address') {
          iconName = `map-marker`;
        } else {
          iconName = `user`;
        }

        // You can return any component that you like here!
        return (
          <Icon
            name={iconName}
            size={25}
            color={focused ? tintColor : '#54657E'}
          />
        );
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
import store from './store/index'
export default {
  components: {AppNavigator, Icon},
  beforeCreate() {
    store.dispatch('sanpham')
    store.dispatch('tintuc')
    store.dispatch('giohang')
  },
};
</script>
<style></style>
