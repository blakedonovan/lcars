<template>
  <div class="dropdown">
    <button @click.prevent="toggleDropDown = !toggleDropDown" class="dropBtn">
      <slot name="menuButton"> </slot>
    </button>

    <ul v-if="toggleDropDown === true" class="dropDownItems">
      <listitems><slot name="li"></slot> </listitems>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import listitems from "./listItems.vue";
export default defineComponent({
  data() {
    return {
      toggleDropDown: false,
    };
  },
  components: {
    listitems,
  },
});
</script>

<style lang="scss" scoped>
$menuBGColor: grey;
$listBorderRadius: 3px;

.dropdown {
  position: relative;
  display: inline-block;
}

.dropBtn {
  cursor: pointer;
}

.dropDownItems {
  margin-top: 2px;

  display: block;
  position: absolute;
  background-color: $menuBGColor;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: $listBorderRadius;
  justify-content: center;
}
</style>
