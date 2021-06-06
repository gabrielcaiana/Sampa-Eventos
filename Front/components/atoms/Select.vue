<template>
  <div class="form-group">
    <label class="form-group__label" :for="text">{{ text }}</label>
    <select
      :id="text"
      :value="value"
      v-bind="$attrs"
      class="form-group__select"
      @change="updateValue"
    >
      <option
        v-for="item in items"
        :key="item"
        :selected="item == value"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    text: { type: String, required: true },
    name: { type: String, required: true },
    items: { type: Array, required: true },
    value: { type: String, required: true },
  },

  setup() {
    function updateValue(event) {
      this.$emit('input', event.target.value);
    }

    return {
      updateValue,
    };
  },
};
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

  &__select {
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
