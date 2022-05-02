<template>
  <div>
    <p>
      <label for="password">Password:</label><br>
      <input type="password" v-model="password" id="password" required /><br />
    </p>

    <span v-if="formHints.password">{{ formHints.password }}</span>
  </div>
</template>

<script>
export default {
  name: 'PasswordField',
  data() {
    return {
      password: '',

      formHints: [],
    };
  },
  watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
  },
  methods: {
    validatePassword(value) {
      // check if less than 8 chars are entered and set the hint array field "password" to activate the hint span
      const difference = 8 - value.length;
      if (value.length < 8) {
        this.formHints.password = `Passwort besteht aus mindestens 8 Zeichen ${difference} noch einzugeben`;
      } else {
        this.formHints.password = '';
      }
    },
  },
};
</script>

<style scoped lang="scss">
$font-stack: Helvetica;
$formHintscolor: #f00;
$inputPaddingSize : 5px;
$inputMarginSize : 10px;
$inputBoxShadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);

input[type=password] {

  padding: $inputPaddingSize;
  margin: $inputMarginSize;
  box-shadow: $inputBoxShadow;
}

span {
  font: $font-stack;
  color: $formHintscolor;
}
</style>
