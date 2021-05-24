<template>
  <div v-if="$dialog" class="overlay">
    <div class="dialog">
      <h1 class="dialog__title">Recuperar senha</h1>
      <v-icon @click="closeModal" class="dialog__close-icon">mdi-close</v-icon>
      <p class="dialog__description">
        Informe seu email e enviaremos as intruções para recuperar senha senha
      </p>

      <form @submit.prevent="submit">
        <Input
          v-model="email"
          text="Email"
          type="email"
          placeholder="Informe seu email"
        />

        <Button text="Recuperar" color="button-default" type="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    email: '',
  }),

  computed: {
    ...mapGetters({
      $dialog: 'dialog/$dialog',
    }),
  },

  methods: {
    submit() {
      console.log(this.$dialog);
    },

    closeModal() {
      this.$store.dispatch('dialog/showDialog', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  width: 102vw;
  height: 102vh;
  background-color: rgba($color: $black, $alpha: 0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  .dialog {
    width: 400px;
    background-color: $white;
    border-radius: 4px;
    padding: 2rem;
    position: relative;

    &__title {
      font-size: 1.5rem;
      font-weight: 700;
      padding: 0.5rem 0;
      color: rgba($color: $black, $alpha: 0.85);
    }

    &__description {
      font-size: 1rem;
      color: rgba($color: $black, $alpha: 0.75);
    }

    &__close-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      transition: all 300ms;

      &:hover {
        color: $primary;
      }
    }

    form {
      display: grid;
      grid-gap: 1rem;
      margin-top: 1rem;
    }
  }
}
</style>
