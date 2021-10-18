<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav,

  }
}
</script>

<style>
.main{
  padding-top: 5rem;
}
</style>