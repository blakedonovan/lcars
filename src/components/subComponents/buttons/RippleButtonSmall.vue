<template>
  <button class="ripple">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    logbla() {
      console.log('geloggt');
    },
  },
};
</script>

<style scoped>
button {
  background-color: #2c3e50;
  border: none;
  color: rgb(255, 255, 255);
  padding: 5px 10px;
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
  background: #42b983 radial-gradient(circle, transparent 1%, #42b983 1%)
    center/15000%;
}
.ripple:active {
  background-color: #ffffff;
  background-size: 100%;
  transition: background 0s;
}
</style>
