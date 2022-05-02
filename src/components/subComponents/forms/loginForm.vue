<template>
    <fieldset>
        <form @submit.prevent>

            <label for="userName">User Name</label><br>
            <input type="text" id="userName" placeholder="Mitarbeiter Kürzel" required>
            <br>

            <PasswordField></PasswordField><br>
            <RippleButtonSmall @click="">Login</RippleButtonSmall>

            {{ users }}

        </form>
    </fieldset>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { userManagement } from '@/store/UserManagement'
import { computed } from 'vue'
import RippleButtonSmall from '@/components/subComponents/buttons/RippleButtonSmall.vue'
import PasswordField from '@/components/subComponents/inputs/PasswordField.vue'
// composition and options API should not be mixed , it should be composition API if logic from component can get stashed away as composable  in order to avoid mixins, if component is not supposed to be reuseable => optionsAPI
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
// make more use of scss , create some sort of theming

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