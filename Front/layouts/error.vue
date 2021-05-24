<template>
  <div class="page-error">
    <div class="404" v-if="error.statusCode === 404">
      <header>
        <Logo />
      </header>
      <h1>Ooops 404!</h1>
      <p>Parece que a página que você está procurando não existe</p>
      <Button text="Voltar para o início" color="button-secondary" />
    </div>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
