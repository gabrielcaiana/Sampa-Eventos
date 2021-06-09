<template>
<transition name="slide">
  <div>
    <h1>Dashboard</h1>
     <Footer />
  </div>
</transition>
</template>

<script>
export default {
  middleware: 'auth',
  pageTransition: "slide",
}
</script>
