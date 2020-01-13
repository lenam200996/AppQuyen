<template>
  <view class="header-home">
    <view class="avatar">
      <image :source="require('../../assets/logo.png')" class="image-avatar" />
    </view>
    <view class="user-name" v-if="token != '' && token != null">
      <text class="name">
        {{fullname}}
        <text class="count-star">| 0</text>
      </text>
    </view>
    <view class="user-name" v-else>
      <text class="name">
        Vui lòng đăng nhập
      </text>
    </view>
    <TouchableOpacity class="notification" v-if="token != '' && token != null" v-bind:onPress="naviToCart">
    <!-- <TouchableOpacity class="notification"  v-bind:onPress="naviToCart"> -->

      <Icon name="opencart" :size="18" color="#eb6641" />
    </TouchableOpacity>
  </view>
</template>
<script>
// import {Icon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../../store/index';
import { TouchableOpacity  } from 'react-native';

export default {
   props: {
    navigation: {type: Object},
  },
  components: {
    Icon,TouchableOpacity
  },
  computed: {
    fullname() {
      return store.state.fullname;
    },
    token() {
      return store.state.token;
    },
  },
  methods: {
    naviToCart(){
      // this.navigation.navigate('Cart')
      // console.log(this.navigation)
      this.navigation.navigate('Cart')
    }
  },
};
</script>
<style scoped>
.header-home {
  background-color: #fff;
  width: 100%;
  height: 40px;
  padding-left: 10;
  border-bottom-width: 1;
  border-bottom-color: #ccc;
  flex-direction: row;
}
.image-avatar {
  width: 30;
  height: 30;
  border-radius: 15;
  margin: 5;
}
.avatar {
  width: 30;
  height: 40;
  flex: 1;
}
.user-name {
  height: 40;
  flex: 8;
  justify-content: flex-end;
  font-size: 12;
  padding-bottom: 5;
}
.name {
  color: #b3b0b0;
  font-size: 12px;
  margin-left: 5px;
}
.count-star {
  color: #000;
}
.notification {
  flex: 1;
  height: 40;
  justify-content: center;
  align-items: center;
}
</style>
