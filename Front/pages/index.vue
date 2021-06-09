<template>
  <div>
    <h1>Home</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { useStore } from '@nuxtjs/composition-api'
export default {
  middleware: 'auth',

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
