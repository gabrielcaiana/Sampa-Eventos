export default {
  async login({ commit }, payload) {
    try {
      const { data, status } = await this.$axios.post('/auth', payload) 

      if(status === 200 ) {
        commit('SET_TOKEN', data.token)
   
        this.$cookies.set('token', data.token, {
          path: '/',
          expires: new Date(data.expires_at)
        })

        this.$router.push('/')
      }
    } catch(err) {
      console.log(err.response)
    }
  }, 

  async update({ commit }) {
    const token = this.$cookies.get('token' || null )
    commit('UPDATE_TOKEN', token)
  }
}