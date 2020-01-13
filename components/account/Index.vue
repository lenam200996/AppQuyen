<template>
  <view>
    <view class="header" style="justify-content:space-between">
      <Icon class="image" name="user-secret" :size="30" color="#eb6641" />
      <!-- <image :source="require('../../assets/images/user.png')" class="image"> </image> -->
      <View class="account" v-if="token != '' && token != null">
        <text class="text-account account-name">{{fullname}}</text>
        <text class="text-account account-type">Gold member</text>
      </View>
      <view  class="wrap-btn" v-else>
        <!-- <button title="Dang nhap" class="btn-auth" @click="loginScreenNavi"></button> -->
        <text class="btn-auth" v-bind:onPress="loginScreenNavi">Đăng nhập</text>
      </view>
    </view>
    <scroll-view class="body-account">
      <view class="item-op">
        <Icon class="icon" name="star" :size="16" color="#374355" />
        <text class="text-op">VQ Coffee</text>
      </view>
      <view class="item-op">
        <Icon class="icon" name="user-o" :size="16" color="#374355" />
        <text class="text-op">Thong tin tai khoan</text>
      </view>
      <view class="item-op">
        <Icon class="icon" name="history" :size="16" color="#374355" />
        <text class="text-op">Lich su</text>
      </view>
      <view class="item-op">
        <Icon class="icon" name="credit-card" :size="16" color="#374355" />
        <text class="text-op">Thanh toan</text>
      </view>
      <view class="item-op" v-if="token != '' && token != null">
        <Icon class="icon" name="sign-out" :size="16" color="#eb6641" />
        <text class="logout" v-bind:onPress="logout">Log out</text>
      </view>
    </scroll-view>
  </view>
</template>
<script>
import {Alert} from 'react-native';
import store from '../../store';
import Icon from 'react-native-vector-icons/FontAwesome';

export default {
  components: {
    Icon,
  },
  methods: {
    loginScreenNavi() {
      this.$emit('navi2Login');
      // Alert.alert('clicked')
    },
    logout() {
      // Alert.alert('logout')
      this.$emit('logout');
    },
  },
  computed: {
    fullname() {
      return store.state.fullname;
    },
    token() {
      return store.state.token;
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  padding-top: 10px;
  background-color: #ffffff;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-color: #eb6641;
  padding-left: 5px;
  padding-right: 5px;
  /* align-items: center; */
  height: 50px;
}
.image {
  width: 50px;
  height: 50px;
  /* border-radius: 25px; */
}
.account {
  justify-content: flex-end;
}
.text-account {
  padding-left: 5px;
}
.account-name {
  color: #eb6641;
  font-size: 16px;
}
.account-type {
  font-size: 12px;
  color: #374355;
}
.btn-auth {
  color: #eb6641;
  text-transform: uppercase;
}
.body-account {
  background-color: #ffffff;
}
.item-op {
  height: 40px;
  line-height: 40px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex: 1;
}
.icon {
  margin-left: 10px;
  margin-right: 10px;
}
.text-op {
  font-size: 12px;
  color: #374355;
}
.logout {
  color: #eb6641;
}
.wrap-btn{
  display: flex;
  height: 100%;
  align-items: center;
}
</style>