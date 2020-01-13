<template>
  <View class="login-view">
      <image :source="require('../../assets/logo.png')" class="image"> </image>
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
    <text class="btn-login" v-bind:onPress="login">Đăng nhập</text>
    <text class="no-acc">Chưa có tài khoản ? <text class="navi-rg" v-bind:onPress="naviToRegister">Đăng ký</text></text>
  </View>
</template>
<script>
import store from '../../store';
import { Alert } from 'react-native';
export default {
    data() {
        return {
            username : "iamquyen",
            password : "123"
        }
    },
    methods: {
        login(){
            // this.username = "abc"
            store.dispatch('login',{username : this.username , password : this.password})
            // setTimeout(()=>{
            //    Alert.alert('Result',store.state.fullname)
            // },3000)
        },
        naviToRegister(){
            this.$emit('navi2register',true)
        }
    },
    computed: {
        token(){
            return store.state.token
        }
    },
    watch: {
        token(val){
            if(val != "" && val != null){
                setTimeout(()=>{
                this.$emit('navi2Account')
                },2000)
            }
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
    padding-left: 10px;
    padding-right: 10px;
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