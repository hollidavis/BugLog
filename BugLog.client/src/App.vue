<template>
  <header class="row">
    <Navbar />
  </header>
  <main class="row">
    <router-view />
  </main>
  <footer class="row">
    <div class="col-12 bg-secondary text-white text-center p-2">
      Made with 💖 by Holli
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
