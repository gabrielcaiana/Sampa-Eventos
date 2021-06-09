<template>
  <div class="banner">
    <div class="container">
      <div class="banner__content">
        <h1>Bem vindo(a) ao Sampa Eventos</h1>
        <p>Aqui você encontra os melhores eventos de São Paulo.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .banner {
    background: url('@/assets/images/banner.png');
    background-size: cover;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      color: $white;

      h1 {
        font-size: 2.5rem;
        font-weight: 800;
        padding: 1rem 0;
      }

      p {
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
</style>
