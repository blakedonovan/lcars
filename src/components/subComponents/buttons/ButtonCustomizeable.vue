<template>
  <button :class="[type]" :disabled="disabled">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    String,
    default: "normal",
  },

  disabled: Boolean,
});
</script>

<style scoped lang="scss">
$fontsize: 14px;
$border-radius: 10px;
$font-stack: Arial, Helvetica, sans-serif;
$buttonFallBackSize: 15px;

button {
  border: 1px solid #ddd;
  padding: $buttonFallBackSize;
  border-radius: $border-radius;
  font-size: $fontsize;
  font-family: $font-stack;
  cursor: pointer;

  &[disabled] {
    cursor: help;
  }

  $colorSelections: danger, warning, normal, info, success;
  $colors: red, yellow, orange, blue, green;
  @each $curColor in $colorSelections {
    $i: index($colorSelections, $curColor);
    &.#{$curColor} {
      background-color: nth($colors, $i);
      color: black;
    }
  }
  &.xxl {
    padding: 30px;
    font-size: calc($fontsize * 1.5);
  }

  &.xl {
    padding: 20px;
    font-size: calc($fontsize * 2);
  }

  &.sm {
    padding: 10px;
    font-size: calc($fontsize * 0.9);
  }

  &.xs {
    padding: 5px;
    font-size: calc($fontsize * 0.5);
  }

  &.tiny {
    padding: 0.5px;
    font-size: calc($fontsize * 0.125);
  }

  &:hover {
    border: 3px solid white;
  }

  &:active:focus {
    border: 3px solid black;
  }
}

$sizes: xxl, xl, sm, xs, tiny;

@each $size in $sizes {
  .#{$size} {
    padding: $buttonFallBackSize * 2;
  }
}
</style>
