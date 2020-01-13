<template>
    <View class="bg-account">
       <account v-if="component == 'account'" v-on:logout="logout" v-on:navi2Login="naviToLogin"></account>
       <login v-if="component == 'login'" v-on:navi2register="naviToRegister" v-on:navi2Account="naviToAccount"></login>
       <register v-if="component == 'register'" v-on:navi2Login="naviToLogin"></register>
    </View>
</template>
<script>
import Account from '../account/Index.vue';
import Login from '../auth/Login'
import Register from '../auth/Register'
import store from '../../store';
export default {
    data() {
        return {
            component : "account"
        }
    },
    components:{
        Account,Login,Register
    },
    methods: {
        naviToRegister(){
            this.component = "register"
        },
        naviToLogin(){
            this.component = "login"
        },
        naviToAccount(){
            this.component = "account"
        },
        logout(){
            store.dispatch('logout')
        }
    },
}
</script>
<style scoped>
.bg-account{
    background-color: rgba(224, 224, 224, 0.301);
}
</style>
