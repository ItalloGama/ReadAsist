<template>
  <div>
    <div v-if="tips.length > 0">
      <h2>HP Book List</h2>
      <div v-for="tip in tips" :key="tip.id">
        <TipCard  :tip="tip"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TipCard from '../components/TipCard.vue'
export default {
  name: 'Tip',
  components: {
    TipCard
  },
  data: () => ({
    tips: []
  }),
  mounted: function () {
    this.GetTip()
  },
  methods: {
    async GetTip (){
      try {
      const res = await axios.get(
        'http://localhost:3001/tip'
      ) 
      this.tips = res.data
      } catch(error) {
        console.log(error)
      }
    } 
  }
}
</script>

<style>
</style>