<template>
    <fieldset>
        <form @submit.prevent>

            <label for="userName">User Name</label><br>
            <input type="text" id="userName" placeholder="Mitarbeiter Kürzel" required>
            <br>

            <PasswordField></PasswordField><br>
            <RippleButtonSmall @click="">Login</RippleButtonSmall>

            {{ userNameInput }}

        </form>
    </fieldset>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { userManagement } from '../../store/UserManagement'
import { computed } from 'vue'
import RippleButtonSmall from '@/components/subComponents/buttons/RippleButtonSmall.vue'
import PasswordField from '@/components/subComponents/inputs/PasswordField.vue'

export default defineComponent({


    data() {
        return {
            users: [],
            userNameInput: ""
        };
    },

    setup() {
        const userControl = userManagement()


        return {

            userControl,

            UserName: computed(() => userControl.userName),

        }

    },
    components: {
        RippleButtonSmall,
        PasswordField
    },
    methods: {



    },

    watch: {


    }


})
</script>


<style scoped lang="scss">
$inputPaddingSize : 5px;
$inputMarginSize : 10px;
$inputBoxShadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);

fieldset {
    border-radius: 5px;
    max-width: 400px;
    box-shadow: $inputBoxShadow;
}

form {

    display: block;

}

input[type=text] {

    padding: $inputPaddingSize;
    margin: $inputMarginSize;
    box-shadow: $inputBoxShadow;

}
</style>