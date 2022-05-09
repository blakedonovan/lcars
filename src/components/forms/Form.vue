<template>

    <form @submit.prevent :class="[formStyle]">
        <div class="col-25">
            <label for="loginName">Benutzer</label>

        </div>
        <div class="col-75">
            <FormInput id="passwort" type="password" v-model="password">

            </FormInput>
        </div>
        <p></p>
        <div class="col-25">

            <label for="passwort">Passwort</label>

        </div>
        <div class="col-75">
            <FormInput id="passwort" type="password" v-model="password"></FormInput>
        </div>
        <div class="col-25">
            <ButtonSubmit type="success normal">
                <template #text>Login</template>
            </ButtonSubmit>
        </div>
    </form>


</template>



<script setup>
import { onMounted, ref, computed } from 'vue'
import FormInput from '@/components/basic/FormInput.vue';
import ButtonSubmit from '@/components/basic/ButtonCustomizeable.vue'
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

    formShow: {

        type: Boolean,
        default: false
    },
    inputItems: {
        type: Array,
        default: () => []
    }

});

// declare variable and make it reactive with ref
const compTitle = ref("Form")
// computed variable , this one is read-only!


// v-model var , made reactive
let loginName = ref("")
let password = ref("")
// define functions


function callForm() {
    formShow = !formShow



}


// call function on lifecycle 

</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}



form {

    background: $form-input-bgColor;
    border: 0.5em solid rgb(0, 208, 255);
    border-radius: $form-border-radius;
    align-items: center;
    padding: $form-padding;
    max-width: 600px;

    // form BG color list
    $formColors: danger, warning, normal, info, success, bcm;
    $colors: rgb(201, 11, 11), rgb(234, 234, 25), rgb(236, 161, 23), rgb(0, 102, 255), rgb(15, 209, 15), rgba(115, 203, 453, 0.5);



    @each $formColor in $formColors {
        $i: index($formColors, $formColor);

        &.#{$formColor} {
            background-color: nth($colors, $i);

        }
    }
}


input {
    border-radius: $input-type-border-radius;
    padding: $input-type-padding;
    color: rgb(255, 123, 0);
    resize: vertical;

}

$formColLayouts:col-25,
col-33 col-75;
$formColLayoutSize:25,
33 75;

@each $formColLayout in $formColLayouts {
    $i: index($formColLayouts, $formColLayout);

    .#{$formColLayout} {
        float: left;
        width: nth($formColLayoutSize, $i)+'%';
        margin-top: 20px;
        font-size: 15px;
    }
}
</style>
