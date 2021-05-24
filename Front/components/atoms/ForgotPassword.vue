<template>
  <p class="forgot-password" @click="forgotPassword">Esqueceu sua senha?</p>
</template>

<script>
export default {
  methods: {
    forgotPassword() {
      this.$store.dispatch('dialog/showDialog', true)
    },
  },
};
</script>

<style lang="scss" scoped>
.forgot-password {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
  font-size: 1rem;
  cursor: pointer;
  color: $primary;
  font-weight: 600;
  transition: all 300ms;

  &:hover {
    filter: brightness(120%);
  }
}
</style>
