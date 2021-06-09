<template>
  <div class="actions-header">
    <nuxt-link to="/login">
      <Button text="Login" color="outlined-default" />
    </nuxt-link>
    <nuxt-link to="/register">
       <Button text="Quero me cadastrar" color="button-default" />
    </nuxt-link> 
  </div>
</template>

<style lang="scss" scoped>
  .actions-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  }
</style>