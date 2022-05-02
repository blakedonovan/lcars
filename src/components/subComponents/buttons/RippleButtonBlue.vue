<template>
  <button class="ripple">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
button {
  background-color: #2c3e50;
  border: none;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;

  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
}

.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: #204972 radial-gradient(circle, transparent 1%, #21486e 1%)
    center/15000%;
}
.ripple:active {
  background-color: #ffffff;
  background-size: 100%;
  transition: background 0s;
}
</style>
