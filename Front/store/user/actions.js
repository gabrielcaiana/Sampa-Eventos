export default {
  async create(_, payload) {
    try {
      const { status } = await this.$axios.post('/users', payload);

      if(status === 200) {
        this.$router.push('/login')
      }

    } catch (err) {
      let errors = err.response.data.errors
      errors.forEach(error => {
        console.log(error)
      });
    }
  },
};
