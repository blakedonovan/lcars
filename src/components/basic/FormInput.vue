<template>

    <input placeholder="test" :class="styles" v-model="input">
    {{input}}
</template>

<script setup lang="ts">
import{watchEffect} from 'vue'

defineProps({

    styles:{
        type:String,
        default:"blue"
    },
    input:{
        type:String
    }
})
function checkInput(){


}
</script>

<style lang="scss" scoped>
label {

    padding: 5px;
}

input {
margin-top:auto;
    padding: $input-type-padding;
    border-radius: 10px;
}
</style>