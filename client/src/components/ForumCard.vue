
<template>
  <div class="card">
    <div class="card-content">
      <div>
        <p>{{ forum.name }}</p>
        <p>{{ forum.note }}</p>
        <form>
          <input type="text" name="nameUpdate">
          <input type="text" name="noteUpdate">
        </form>
        <button @click="deletePost(forum.id)">Delete</button>
        <button @click="showForm">Update</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {updateForm} from '../services/forumServices'
export default {
  name: 'ForumCard',
  props: ['forum'],
  data: ()=>({
    updateForm: false,
    newName:'',
    newNote:''
  }),
  methods: {
    async deletePost(forumId){
      this.$router.go()
      try{
      const res = await axios.delete(
        `http://localhost:3001/forum/${forumId}`
        )
      return res.data
      } catch(error) {
        console.log(error)
      }
    },
    async updatePost(){
    const data = {
      "name": this.newName,
      "note": this.newNote
    }
    const res = await updatePost(this.id, data)
    console.log(res)
    },
    showForm(){
      this.updateForm = true
    }
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
