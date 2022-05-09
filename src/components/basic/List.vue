<template>
    <form @submit="sendData">

        <slot v-for="(input, index) in inputs" :input="input" :key="index">

        </slot>


       <button type="submit">send</button>
    </form>

</template>

<script>
export default {
    props: {
        inputs: {
            type: Array,
            default: () => []
        },


    },

    methods: {
        sendData(e) {


            e.preventDefault();

        }
    }
};
</script>
<style>
</style>
