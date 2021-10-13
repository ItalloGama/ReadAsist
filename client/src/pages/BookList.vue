<template>
  <div>
    <h2>PLEASE SELECT A MENU</h2>
    <div>
      <div v-for="book in books" :key="book.id">
        <BookListCard  />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BookListCard from '../components/BookListCard'
export default {
  name: 'Menu',
  components: {
    BookListCard
  },
  data: () => ({
    books: []
  }),
  methods: {
    async GetBook(){
      const res = await axios.get(
        'http://localhost:3001/book'
      )
      this.book = res.data
      console.log(this.book)
    }
  }
}
</script>

<style>
</style>