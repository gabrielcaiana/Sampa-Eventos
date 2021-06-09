<template>
  <header class="header">
    <div v-if="isAuth" class="container">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <div @click="logout">
        <Button text="Logout" color="outlined-default" />
      </div>
    </div>

    <div v-else class="container">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <ActionsHeader />
    </div>
  </header>
</template>

<script>
import { computed, useStore } from '@nuxtjs/composition-api';
export default {
  setup() {
    let store = useStore();
    let isAuth = computed(() => store.state.auth.token != null);

    function logout() {
      store.dispatch('auth/destroy');
    }

    return {
      isAuth,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 3.5rem;
  background: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.2rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>
