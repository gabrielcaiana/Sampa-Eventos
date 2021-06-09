<template>
  <footer class="footer">
    <p>Sampas eventos {{ year }} - todos os direitos reservados</p>
  </footer>
</template>

<script>
import { computed } from '@nuxtjs/composition-api';
export default {
  setup() {
    let year = computed(() => new Date().getFullYear());

    return {
      year,
    };
  },
};
</script>

<style lang="scss" scoped>
  .footer {
    width: 100vw;
    height: 56px;
    background-color: $primary;
    color: $white;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
  }
</style>
