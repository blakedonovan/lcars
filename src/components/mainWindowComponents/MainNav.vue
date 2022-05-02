<template>
  <RippleButton v-if="loginState === true" @click="openMenu()">
    {{ btnText }}
  </RippleButton>

  <nav
    v-if="loginState === true"
    v-bind:class="[openMenuToken ? 'open' : 'closed']"
  >
    <li><RippleButton @click="$router.push('/')">Team</RippleButton></li>
    <li>
      <RippleButton @click="$router.push('/booking')"> Buchen </RippleButton>
    </li>
    <li>
      <RippleButton @click="$router.push('/settings')">
        Einstellungen
      </RippleButton>
    </li>

    <li>
      <RippleButton @click="$router.push('/admin')"> Admin </RippleButton>
    </li>

    <li>
      <RippleButton @click="$router.push('/test')"> Test </RippleButton>
    </li>
  </nav>
</template>

<style scoped >
nav li {
  text-decoration: none;
  list-style-type: none;
}

li:nth-child(odd) {
  transform: rotate(10deg);
}

li:nth-child(even) {
  transform: rotate(-10deg);
}

.closed {
  animation: swirl-out 1.6s ease-out both;
}

.open {
  animation: swirl-in 0.6s ease-out both;
}

@keyframes swirl-in {
  0% {
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }

  100% {
    transform: rotate(0) scale(1) translate(30px, 20px);
    opacity: 1;
  }
}

@keyframes swirl-out {
  0% {
    transform: rotate(540deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(0) scale(0);
    opacity: 0;
  }
}
</style>

<script>
import RippleButton from '@/subComponents/buttons/RippleButton.vue';

export default {
  components: {
    RippleButton,
  },

  data() {
    return {
      openMenuToken: false,
      btnText: 'Menu',
    };
  },

  computed: {
    userName() {
      return this.$store.state.userManagement.userName;
    },
    loginState() {
      return this.$store.state.userManagement.userLoginStatus;
    },
  },

  methods: {
    openMenu() {
      this.openMenuToken = !this.openMenuToken;
    },
  },
};
</script>
