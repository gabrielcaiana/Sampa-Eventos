<template>
  <div class="form-group">
    <label class="form-group__label" :for="text">{{ text }}</label>
    <input
      :id="text"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      class="form-group__input"
      v-bind="$attrs"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    text: { type: String, required: true },
    type: { type: String, required: true },
    placeholder: { type: String, required: true },
    value: { type: String, required: true },
  },

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__label {
    font-size: 1rem;
    color: $black;
    padding: 1rem 0;
  }

  &__input {
    border: 1px solid $gray--light;
    border-radius: 4px;
    padding: 1rem;
    transition: all 300ms;

    &:focus {
      outline: none;
      border: 1px solid $primary;
    }
  }
}
</style>
