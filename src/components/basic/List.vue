<template>
    <form @submit="sendData">

        <slot v-for="(label, index) in labels" :label="label" :key="index">

        </slot>


        <button>Send</button>
    </form>
</template>

<script>
export default {
    props: {
        labels: {
            type: Array,
            default: () => []
        },


    },

    methods: {
        sendData(e) {

            for (let key of Object.keys(this.formData)) {
                console.log(key + "->" + this.formData[key])
            }

            e.preventDefault();

        }
    }
};
</script>
<style>
</style>
