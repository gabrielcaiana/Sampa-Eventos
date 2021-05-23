<template>
  <button :type="type" class="button-default" :class="color">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    color: { type: String, required: true },
    type: { type: String, required: true },
  },
}
</script>

<style lang="scss" scoped>
.button-default {
  background: $primary;
  border-radius: 4px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  color: $white;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    filter: brightness(120%);
  }
}

.button-secondary {
  background: $secondary;
}

.outlined-default {
  background: none;
  border: 1px solid $primary;
  color: $primary;
}
</style>
