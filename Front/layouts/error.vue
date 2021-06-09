<template>
  <div class="page-error">
    <header class="page-error__header">
      <nuxt-link to="/">
        <LogoWhite />
      </nuxt-link>
    </header>
    <div class="page-error__container">
      <div class="page-error__container__content">
        <h1>Ooops 404!</h1>
        <p>Parece que a página que você está procurando não existe</p>
        <div class="page-error__container__content__action">
          <nuxt-link to="/">
            <Button text="Voltar para o início" color="button-secondary" />
          </nuxt-link>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
.page-error {
  height: 100vh;
  background-color: $primary;

  &__header {
    width: 100vw;
    padding: 2rem;
  }

  &__container {
    width: 100vw;
    height: calc(100vh - 98px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    &__content {
      display: flex;
      align-items: center;
      flex-direction: column;
      max-width: 50%;
      color: $white;
      h1 {
        font-size: 5.75rem;
        font-weight: 800;
        padding: 2rem 0;
      }

      p {
        font-size: 1.5rem;
        padding-bottom: 2rem;
      }

      &__action {
        width: 250px;
      }
    }
  }
}
</style>
