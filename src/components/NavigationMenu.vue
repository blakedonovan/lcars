<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Reserve' }">Reserve</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'History' }">History</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Team' }">Team</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Profile' }">Profile</router-link>
        </li>
      </ul>
      <div class="icon">
        <img src="@/assets/bgimages/burger_icon.svg" alt="" v-show="mobile" :class="{ 'icon-active': mobileNav }"
          @click="toggleMobileNav" />
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Reserve' }">Reserve</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'History' }">History</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Team' }">Team</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Profile' }">Profile</router-link>
          </li>


        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/colors.scss';

.icon {
  width: 100px;
  height: 100px;
  background: $bcmWhite;
  color: whitesmoke;

  img {
    width: 100px;
    height: 100px;
    color: whitesmoke;
  }
}
</style>
