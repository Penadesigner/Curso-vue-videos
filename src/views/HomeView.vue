<template>
  <main>
    <Inscrevase/>
  </main>
</template>

<script>
import Inscrevase from '../components/Inscrevase.vue'
export default ({
  name: 'HomeView',
  components: {
    Inscrevase
  }
})
</script>

<style scoped>
  main {
    background-color: var(--color-background-home);
    color: var(--color-text-light);
    justify-content: center;
    align-items: center;
  }
</style>
