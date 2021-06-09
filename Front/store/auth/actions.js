export default {
  async login({ commit, dispatch }, payload) {
    try {
      const { data, status } = await this.$axios.post('/auth', payload) 
 
      if(status === 200 ) {
        commit('SET_TOKEN', 'ativo')
   
        this.$cookies.set('token', 'ativo', {
          path: '/',
          expires: new Date(data.expires)
        })  

        this.$cookies.set('user_id', data.user_id, {
          path: '/',
          expires: new Date(data.expires)
        })  

        this.$router.push('/dashboard')
      }
    } catch(err) {
      console.log(err.response)
    }
  }, 

   async update({ commit }) {
    const token = this.$cookies.get('token' || null )
    commit('UPDATE_TOKEN', token) 
  },

  async destroy( { commit }) {
    this.$cookies.remove('token')
    this.$cookies.remove('user_id')
    commit('UPDATE_TOKEN', null)
    this.$router.push('/login')
  }
}