<template>
  <v-container class="login-card">
    <Logo />
    <h1 class="login-card__title">Login</h1>
    <p class="login-card-description">Informe seu email e senha para entrar</p>
    <FormLogin />
  </v-container>
</template>

<style lang="scss" scoped>
.login-card {
  padding: 2rem 6rem;
  &__title {
    padding: 2rem 0;
    font-size: 2rem;
    color: $black;
  }
}
</style>
