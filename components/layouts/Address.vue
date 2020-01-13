<template>
    <View class="bg-account">
        <header></header>
        <body></body>
    </View>
</template>
<script>
import Header from '../Address/Header.vue';
import Body from '../Address/Body.vue';
export default {
    components:{
        Header,Body
    }
}
</script>
<style scoped>

.bg-account{
    background-color: rgba(224, 224, 224, 0.301);
}
</style>
