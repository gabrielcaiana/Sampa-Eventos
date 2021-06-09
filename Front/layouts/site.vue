<template>
  <transition name="slide">
    <div class="layout-site">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </transition>
</template>

<script>
export default {
  layoutTransition: 'slide',
};
</script>
