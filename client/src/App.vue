<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <br>
    <div>
      <BookList />
    </div>
    
  </div>
</template>

<script>
import BookList from './pages/BookList.vue'
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav,
    BookList
  }
}
</script>

<style>
</style>