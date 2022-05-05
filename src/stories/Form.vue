<template>
    <div class="card">
        <div class="card_title">
            {{ compTitle }}
        </div>
        <form @submit.prevent>

            <label for="loginName">Benutzer</label>
            <input id="loginName" type="text" v-model="loginName">

            <label for="passwort">Passwort</label>
            <input id="passwort" type="password" v-model="password">

            <button @click="showName">Name</button>
        </form>
    </div>
    {{ loginName }} {{ password }}
</template>


<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
// anything declared in script setup is directly useable in the template
// macro function to define Props
defineProps({

    userShort: {
        type: String,
        default: ""
    }

});

// declare variable and make it reactive with ref
const compTitle = ref("Form")
// computed variable , this one is read-only!
let number:Number=3;

function domath(){
  return number.valueOf
}

// v-model var , made reactive
let loginName = ref("")
let password = ref("")
// define functions 

function showUP() {
    console.log(number)
}


function showName() {
    alert(loginName)
}
// call function on lifecycle 
onMounted(
    () => showUP()
)

</script>

<style>
form {

    border: 0.5em solid black;
}

input[type=text] {

    border-radius: 5px;
    padding: 5px;
}

.card_title {

    background: blue;
    max-width: 250px;
    border-radius: 5px;
}
</style>
