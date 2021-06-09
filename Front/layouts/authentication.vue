<template>
<transition name="slide">
  <div class="authentication">
    <v-row>
      <v-col cols="6" class="authentication__form">
        <nuxt />
      </v-col>
      <v-col class="authentication__presentation" cols="6">
        <p class="authentication__presentation__description">
          O Sampa <span>eventos</span> é uma forma diferente e divertida de você
          encontrar e provomover eventos.
        </p>
      </v-col>
      <ForgotDialog />
    </v-row>
  </div>
  </transition>
</template>

<script>
export default {
  layoutTransition: "slide"
}
</script>

<style lang="scss" scoped>
.authentication {
  position: relative;
  &__form {
    display: grid;
    align-items: center;
  }

  &__presentation {
    background-image: url('@/assets/images/stars.svg');
    background-size: 102vh auto;
    background-repeat: no-repeat;
    background-color: $primary;
    min-height: 102vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8rem;

    &__description {
      font-size: 2.5rem;
      max-width: 550px;
      color: $white;
      font-weight: 700;

      span {
        color: $secondary;
      }
    }
  }
}
</style>
