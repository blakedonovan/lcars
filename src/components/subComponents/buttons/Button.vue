<template>
  <button :style="{ width, height, background, color }">
    <div class="content__inside">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'myButton',
  props: {
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    background: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/colors.scss';

button {
  width: 350px;
  height: 100px;
  color: $bcmBlack;
  background: $buttonBG;
  border-radius: 20px;
  border: 1px solid $bcmGrey;
  .content__inside {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: $textColor;
    font-size: 16px;
  }
  img {
    width: 48px;
    height: 48px;
  }
}
</style>
