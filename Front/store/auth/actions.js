export default {
  async login({ commit, dispatch }, payload) {
    try {
      dispatch('loader/setLoader', true, { root: true })
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

        dispatch('snackbar/setSnackbar', { visible: true, message: "teste"}, { root: true })
        this.$router.push('/dashboard')
      }
    } catch(err) {
      console.log(err.response)
    } finally {
      dispatch('loader/setLoader', false, { root: true })
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