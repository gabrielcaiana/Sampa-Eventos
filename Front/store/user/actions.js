export default {
  async create(dispatch, payload) {
    try {
      dispatch('loader/setLoader', true, { root: true })
      const { status } = await this.$axios.post('/users', payload);

      if (status === 200) {
        this.$router.push('/login');
      }
    } catch (err) {
      let errors = err.response.data.errors;
      errors.forEach((error) => {
        console.log(error);
      });
    } finally {
      dispatch('loader/setLoader', false, { root: true })
    }
  },

  async setCurrentUser({ commit, dispatch }) {
    try {
      dispatch('loader/setLoader', true, { root: true })
      const id = this.$cookies.get('user_id')

      if(id) {
        const { data } = await this.$axios.get(`/users/${id}`);
        commit('SET_USER', data);
      } else {
        commit('SET_USER', null);
      }
    } catch(err) {
      console.log(err)
    } finally {
      dispatch('loader/setLoader', false, { root: true })
    }
  },
};
