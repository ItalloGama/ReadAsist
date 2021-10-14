
<template>
  <div class="card">
    <div class="card-content">
      <div>
        <p>{{ name }}</p>
        <p>{{ note }}</p>
        <form>  
          <input placeholder="name" @input="handChangeName"/>
          <input placeholder="content" @input="handleChangeNote"/>
          <button @click.prevent="updateNote(id)">save</button>
        </form>
        <button @click="deletePost(id)">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {updatePost} from '../services/forumServices'
export default {
  name: 'ForumCard',
  props: {
    name:String,
    note:String,
    id: Number
  },
  data: ()=>({
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
    async updateNote(id){
      this.$router.go()
    const data = {
      "name": this.newName,
      "note": this.newNote
      }
        const res = await updatePost(id, data)
        console.log(res)
    },
    handChangeName(e){
      this.newName = e.target.value
    },
    handleChangeNote(e){
      this.newNote = e.target.value
    },
    // showForm(){
    //   this.updateForm = true
    // }
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
