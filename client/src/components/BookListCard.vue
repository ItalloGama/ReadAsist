<template>
  <div class="card">
    <div class="card-content">
      <div>
        <img :src="book.img" />
      </div>
      <div>
        <p>{{ book.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BookListCard',
  props: ['book']
  

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
