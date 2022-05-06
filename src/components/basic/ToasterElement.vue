<template >

    <button @click="show = !show">Speichern</button>
    <transition name='bounce'>
        <div :class="[toaster]" v-if="show">
            <slot name='toasterText'></slot>
        </div>
    </transition>
</template>


<script setup>
defineProps({

    toaster: {
        type: String
    },

    show: {
        type: Boolean
    }

})

defineEmits({


})
</script>


<style scoped lang="scss">
.toaster {
    margin-top: 10px;
    font-size: $fontSize;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 20px;
    color: $font-color;
    text-align: center;
    max-width: 40%;
    box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.845);
    font-family: $toaster-fontStack;
    background: $standardColor;

    &.danger {

        background-color: hsla(0, 100%, 50%, 0.9);
    }

    &.warning {

        background-color: hsla(30, 100%, 50%, 0.9);
    }
}

.bounce-enter-active {
    animation: bounce-in .5s;
}

.bounce-leave-active {
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);

    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }


}
</style>