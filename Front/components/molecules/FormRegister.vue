<template>
  <form class="form" @submit.prevent="register">
    <v-row>
      <v-col cols="12">
        <Input
          v-model="form.name"
          text="Nome completo"
          type="text"
          placeholder="Informe seu nome completo"
        />

        <Input
          v-model="form.email"
          text="Email"
          type="Email"
          placeholder="Informe seu email"
        />

        <v-row>
          <v-col cols="6">
            <Input
              v-model="form.cell"
              text="Celular"
              type="text"
              placeholder="Informe seu telefone"
            />
          </v-col>

          <v-col cols="6">
            <Select
              v-model="form.gender"
              name="form"
              text="Gênero"
              type="text"
              placeholder="Informe seu telefone"
              :items="items"
            />
          </v-col>
        </v-row>

        <Input
          v-model="form.password"
          text="Senha"
          type="password"
          placeholder="Informe uma senha"
        />

        <v-row>
          <v-col cols="12" class="form__actions">
            <NuxtLink to="/">
              <Button
                type="button"
                text="Voltar ao início"
                color="outlined-default"
                path="/home"
              />
            </NuxtLink>
            <Button type="submit" text="Cadastrar" color="button-default" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import { reactive, useContext } from '@nuxtjs/composition-api';
export default {
  setup() {
    let items = ['Não binário', 'Masculino', 'Feminino'];

    let form = reactive({
      name: '',
      email: '',
      cell: '',
      gender: '',
      password: '',
    });

    const { store } = useContext()

    async function register() {
      await store.dispatch('user/create', form)
      // form = {}
    }

    return {
      items,
      form,
      register,
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
</style>
