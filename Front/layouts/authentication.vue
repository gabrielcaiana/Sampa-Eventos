<template>
  <div class="authentication">
    <v-row>
      <v-col cols="6" class="authentication__form">
        <nuxt />
      </v-col>
      <v-col class="authentication__presentation" cols="6"></v-col>
      <ForgotDialog />
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.authentication {
  position: relative;
  &__form {
    display: grid;
    align-items: center;
  }

  &__presentation {
    background-color: $primary;
    min-height: 102vh;
  }
}
</style>
