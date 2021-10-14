
<template>
  <div class="card">
    <div class="card-content">
      <div>
        <p>{{ forum.name }}</p>
        <p>{{ forum.note }}</p>
        <button @click="deletePost">X</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ForumCard',
  props: ['forum'],
  methods: {
    async deletePost(forum_id){
      try{
      const res = await axios.delete(
        `http://localhost:3001/forum${forum_id}`
        )
      return res.data
      } catch(error) {
        console.log(error)
      }
    },
  },
}
  



</script>

<style scoped>
.card {
  border: 1px solid;
  border-radius: 8px;
  max-width: 400px;
  margin: 1em auto;
  cursor: pointer;
  transition: all 0.2s ease;
}

.card:hover {
  opacity: 0.7;
}
.icon {
  font-size: 1.3rem;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0.5em;
}

.info {
  display: flex;
  align-items: center;
}

.card-header h3 {
  margin-left: 0.5em;
}

.card-header img {
  border-radius: 50%;
}

.card-content {
  text-align: center;
}
</style>
