<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link style="text-decoration: none; color: inherit" to="/home">Home</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit" to="/reserve">Reserve</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit" to="/history">History</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit" to="/team">Team</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit" to="/profile">Profile</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit" to="/test">Test</router-link>
        </li>
      </ul>
    </nav>
    <img :style="{ width, height }" src="@/assets/bgimages/Logo-with-tagline-02.png" alt="BCM Logo" />
  </div>

</template>

<script>
export default {
  components: {},
  name: 'MyHeader',

  props: {
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/colors.scss';

/* GET rid of inline CSS */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 100%;
  background: $bcmBlack;
  position: relative;

  nav {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;

      li {
        color: $bcmWhite;
        list-style: none;
        padding: 5px;
      }
    }
  }

  img {
    object-fit: scale-down;
    align-content: center;
    height: 70%;
    width: 100%;
  }
}
</style>
