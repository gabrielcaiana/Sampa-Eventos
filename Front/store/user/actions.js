export default {
  async create(_, payload) {
    try {
      const { status } = await this.$axios.post('/users', payload);

      if (status === 200) {
        this.$router.push('/login');
      }
    } catch (err) {
      let errors = err.response.data.errors;
      errors.forEach((error) => {
        console.log(error);
      });
    }
  },

  async setCurrentUser({ commit }) {
    try {
      const id = this.$cookies.get('user_id')

      if(id) {
        const { data } = await this.$axios.get(`/users/${id}`);
        commit('SET_USER', data);
      } else {
        commit('SET_USER', null);
      }
    } catch(err) {
      console.log(err)
    }
  },
};
