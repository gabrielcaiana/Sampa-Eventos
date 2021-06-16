<template>
  <div v-if="show" class="overlay">
    <v-progress-circular indeterminate class="loader"></v-progress-circular>
  </div>
</template>

<script>
export default {
  props: {
  show: {
    show: Boolean,
    required: true,
    default: false
  }
},

  setup() {},
};
</script>

<style lang="scss" scoped>
.overlay {
  width: 100vw;
  height: 102vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba($color: #ffffff, $alpha: 0.3);
}

.loader {
  color: $secondary;
}
</style>
