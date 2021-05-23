<template>
  <v-container class="register-card">
    <Logo />
    <h1 class="register-card__title">Crie sua conta agora mesmo!</h1>
    <FormRegister />
  </v-container>
</template>

<style lang="scss" scoped>
.register-card {
  padding: 2rem 6rem;

  &__title {
    padding: 2rem 0;
    font-size: 2rem;
    color: $black;
  }
}
</style>
