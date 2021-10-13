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
// import BookList from './pages/BookList.vue'
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav,
    // BookList
  }
}
</script>

<style>
.main{
  padding-top: 5rem;
}
</style>