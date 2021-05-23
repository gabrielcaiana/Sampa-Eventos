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

        <p class="form__forgot-password">Esqueceu sua senha?</p>

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
  </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),

  methods: {
    login() {
      console.log(this.form);
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

  &__forgot-password {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0;
    font-size: 1rem;
    cursor: pointer;
    color: $primary;
    font-weight: 600;
    transition: all 300ms;

    &:hover {
      filter: brightness(120%);
    }
  }
}
</style>
