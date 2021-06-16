<template>
  <v-snackbar v-model="visible">
    {{ message }}
  </v-snackbar>
</template>

<script>
import { useStore, computed } from '@nuxtjs/composition-api';
export default {
  setup() {
    const store = useStore();
    const $snackbar = computed(() => store.getters['snackbar/$snackbar']);

    let message = $snackbar.value.message;
    let visible = $snackbar.value.visible;

    return {
      visible,
      message,
    };
  },
};
</script>
