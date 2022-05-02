<template>
  <RippleButtonSmallVue @click.prevent="toggleCollapse = !toggleCollapse">
    <slot name="buttonText"></slot>
  </RippleButtonSmallVue>
  <transition name="fade">
    <div v-if="toggleCollapse === true">
      <fieldset class="collapsedContent">
        <slot name="collapsibleContent"></slot>
      </fieldset>
    </div>
  </transition>
</template>

<script>
import RippleButtonSmallVue from '../buttons/RippleButtonSmall.vue';

export default {
  components: {
    RippleButtonSmallVue,
  },
  data() {
    return {
      toggleCollapse: false,
    };
  },

  methods: {
    toggleCollapsedContent() {
      // toggle true:false for conditional render of the content
      this.toggleCollapse = !this.toggleCollapse;
      // optional collapse Function in case extra capabilities are to be added
    },
  },
};
</script>

<style scoped lang="scss">
/* Transition needs to be smoother*/
.fade-enter-active,
.fade-leave-active {

  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {

  opacity: 0;
}

fieldset {
  border-radius: 5px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
}
</style>
