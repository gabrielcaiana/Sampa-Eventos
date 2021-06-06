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
          <NuxtLink to="/">
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
import { reactive } from '@nuxtjs/composition-api';
export default {
  setup() {
    let dialog = false;

    let form = reactive({
      email: '',
      password: '',
    });

    function login() {
      console.log(form);
    }

    function showModal(event) {
      if (event) {
        dialog.value = !dialog.value;
      }
    }

    return {
      dialog,
      form,
      login,
      showModal,
    };
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
