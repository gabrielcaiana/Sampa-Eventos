export default {
  actions: {
    async nuxtServerInit({ dispatch}) {
      debugger
      await dispatch('auth/update')
    }
  }
}