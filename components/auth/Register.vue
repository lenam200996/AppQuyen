<template>
  <View class="login-view">
      <image :source="require('../../assets/logo.png')" class="image"> </image>
     <text-input
      class="text-input-container"
      placeholder="Fullname"
      v-model="fullname"
    />
     <text-input
      class="text-input-container"
      placeholder="Username"
      v-model="username"
    />
    
    <text-input
      class="text-input-container"
      placeholder="Password"
      :secureTextEntry="true"
      v-model="password"
    />
    <text-input
      class="text-input-container"
      placeholder="Re-Password"
      :secureTextEntry="true"
      v-model="repassword"
    />
    <text class="btn-login" v-bind:onPress="register">Đăng ký</text>
    <text class="no-acc">Đã có tài khoản ? <text class="navi-rg" v-bind:onPress="naviToLogin">Đăng nhập</text></text>
  </View>
</template>
<script>
import Vue from 'vue-native-core';
import VueNativeNotification from 'vue-native-notification'
import store from '../../store';
import { Alert } from 'react-native';
Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true
})
export default {
    data() {
        return {
            fullname: "",
            username : "",
            password : "",
            repassword: ""
        }
    },
    methods: {
       register(){
            store.dispatch('register',{fullname: this.fullname ,username: this.username,password:this.password})
            setTimeout(()=>{
               Alert.alert('Result',store.state.statusMess)
            },3000)
        },
        naviToLogin(){
            this.$emit('navi2Login',true)
        }
    },
};
</script>
<style scoped>
.login-view {
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f88b6d;
}

.text-input-container {
  width: 80%;
  height: 40;
  font-size: 16;
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding-left: 15px;
}
.btn-login {
    font-size: 16;
    background-color: #374355;
    color: #ffffff;
    text-transform: uppercase;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
}
.image{
    width: 150px;
    height: 150px;
    margin-top: -50px;
    margin-bottom: 10px;
}   
.no-acc{
    color: #ffffff;
    margin-top: 10px;
}
.navi-rg{
    color: red;
}
</style>