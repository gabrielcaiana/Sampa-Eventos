<template>
  <transition name="slide">
    <div class="layout-site">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </transition>
</template>

<script>
import { onMounted, useStore } from '@nuxtjs/composition-api'
export default {
  layoutTransition: 'slide',
  setup() {
    const store = useStore() 
    onMounted(() => { 
      store.dispatch('user/setCurrentUser')
    })
  }
};
</script>
