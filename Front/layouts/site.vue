<template>
  <transition name="slide">
    <div class="layout-site">
      <!-- <no-ssr> -->
      <Loader :show="$loader" />
       <!-- <Snackbar />
       </no-ssr> -->
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </transition>
</template>

<script>
import { onMounted, useStore, computed } from '@nuxtjs/composition-api'

export default {
  layoutTransition: 'slide',
  setup() {
    const store = useStore() 
    onMounted(() => { 
      store.dispatch('user/setCurrentUser')
    })

    const $loader = computed(() => store.getters['loader/$loader'])

    return {
      $loader
    }
  }
};
</script>
