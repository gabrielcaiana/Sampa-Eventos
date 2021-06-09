<template>
  <header class="header">
    <div class="container">
      <Logo />
      <ActionsHeader />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 3.5rem;
  background: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>
