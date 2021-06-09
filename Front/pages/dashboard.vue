<template>
<transition name="slide">
  <div>
    <h1>Dashboard</h1>
    <button @click="logout">Logout</button>
  </div>
</transition>
</template>

<script>
import { useStore } from '@nuxtjs/composition-api'
export default {
  middleware: 'auth',
  pageTransition: "slide",

  setup() {
    const store = useStore()
    async function logout() {
      store.dispatch('auth/destroy')
    }

    return {
      logout
    }
  }
}
</script>
