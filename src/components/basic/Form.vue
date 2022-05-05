<template>


    <form @submit.prevent :class="[formStyle]">
        <div class="col-25">
            <label for="loginName">Benutzer</label>

        </div>
 <div class="col-75">
        <input id="loginName" type="text" v-model="loginName">
        </div>
        <p></p>
        <div class="col-25">

            <label for="passwort">Passwort</label>

        </div>
         <div class="col-75">
        <input id="passwort" type="password" v-model="password">
</div>
        <button>fire</button>
    </form>

</template>


<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
// anything declared in script setup is directly useable in the template
// macro function to define Props
defineProps({


    formStyle: {
        type: String,
        default: "normal"
    },

    userShort: {
        type: String,
        default: ""
    },



});

// declare variable and make it reactive with ref
const compTitle = ref("Form")
// computed variable , this one is read-only!


// v-model var , made reactive
let loginName = ref("")
let password = ref("")
// define functions





// call function on lifecycle 

</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
html{

    background-color: antiquewhite;
}
form {

    background: $form-input-bgColor;
    border: 0.5em solid rgb(0, 255, 115);
    border-radius: $form-border-radius;
    align-items: center;
    padding: 20px;
    min-width: 600px;
}


input[type] {
    border-radius: $input-type-border-radius;
    padding: $input-type-padding;
    color: rgb(255, 123, 0);
    resize: vertical;

}

.col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
}

.col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
}
</style>
