<template>
  <div>
      <form @submit.prevent="submitPost">
        <input name="name" 
        type="text" 
        placeholder="Name" 
        :value="input.name" 
        @change="handleChange"/>
        <textarea cols="50" 
        class="note" 
        name="note" 
        type="text" 
        placeholder="Start writing here" 
        :value="input.note" 
        @change="handleChange"/>
        <button :disabled="!input.name" >Submit</button>
      </form>
    <h3>Forum</h3>
    <div v-for="forum in forums" :key="forum.id" >
    <ForumCard :forum="forum" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ForumCard from '../components/ForumCard.vue'
export default {
  name: 'Forum',
    components:{
    ForumCard
  },
    data: () => ({
    input: {
      name: '',
      note: ''
    },
    forums:[]
    }),
mounted: function() {
    this.getPosts()
  },
  methods: {
    handleChange(e) {
      this.input[e.target.name] = e.target.value
      this.input[e.target.note] = e.target.value
    },
    async getPosts(){
      try {
        const res = await axios.get(
          'http://localhost:3001/forum'
        )
        this.forums = res.data
      } catch (error) {
        console.log(error)
      }
    }
  },
        
  
}
</script>
<style>

</style>