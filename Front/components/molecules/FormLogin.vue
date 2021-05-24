<template>
  <form class="form" @submit.prevent="login">
    <v-row>
      <v-col cols="12">
        <Input
          v-model="form.email"
          text="Email"
          type="Email"
          placeholder="Informe seu email"
        />

        <Input
          v-model="form.password"
          text="Senha"
          type="password"
          placeholder="Informe uma senha"
        />

        <ForgotPassword @openModal="showModal($event)" />

        <div class="form__actions">
          <NuxtLink to="/home">
            <Button
              type="button"
              text="Voltar ao início"
              color="outlined-default"
              path="/home"
            />
          </NuxtLink>
          <Button type="submit" text="Entrar" color="button-default" />
        </div>
      </v-col>
    </v-row>

    <div class="dialog" v-if="dialog"></div>
  </form>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    form: {
      email: '',
      password: '',
    },
  }),

  methods: {
    login() {
      console.log(this.form);
    },

    showModal(event) {
      if(event) {
        this.dialog = !this.dialog
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__actions {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
}

.dialog {
  position: absolute;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: black;
}
</style>
