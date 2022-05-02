<template>
  <input
    type="text"
    placeholder="User Kürzel"
    v-if="loginState === false"
    v-model="userShort"
  />
  <input type="password" placeholder="Passwort" v-if="loginState === false" />

  <button
    v-if="loginState === false"
    @click="changeUserLoginStatus(), getUserName(), $router.push('/booking')"
  >
    Sign In with Google
  </button>
  <button
    v-if="loginState === true"
    @click="changeUserLoginStatus(), $router.push('/')"
  >
    SignOut
  </button>

  <p>
    <span v-if="loginState === true"> {{ userShort }} angemeldet</span>
  </p>
  <p>
    <span v-if="loginState === false"> Bitte mit gültigen Daten einloggen</span>
  </p>
</template>

<script>
export default {
  data() {
    return {
      loginState: this.$store.state.userManagement.userLoginStatus,
      userName: this.$store.state.userManagement.userName,

      userShort: null,
    };
  },
  computed: {},
  methods: {
    changeUserLoginStatus() {
      this.loginState = !this.loginState;
      this.$store.commit('changeUserStatus', this.loginState);

      // console.log(this.loginState)
    },

    getUserName() {
      this.$store.state.userManagement.userName = this.userShort;
      this.$store.commit('retrieveUserName', this.userShort);
    },
  },
};
</script>

<style scoped>
input {
  background-color: rgb(214, 218, 218);
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.button {
  margin-left: 3px;

  border: none;

  border-radius: 20px;
}
</style>
