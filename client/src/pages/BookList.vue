<template>
  <div>
    <div v-if="books.length > 0">
      <h2>HP Book List</h2>
      <div v-for="book in books" :key="book.id">
        <BookListCard  :book="book"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BookListCard from '../components/BookListCard'
export default {
  name: 'BookListCard',
  components: {
    BookListCard
  },
  data: () => ({
    books: []
  }),
  mounted: function () {
    this.GetBook()
  },
  methods: {
    async GetBook (){
      try {
      const res = await axios.get(
        'http://localhost:3001/book'
      ) 
      this.books = res.data
      } catch(error) {
        console.log(error)
      }
    } 
  }
}
</script>

<style>
</style>