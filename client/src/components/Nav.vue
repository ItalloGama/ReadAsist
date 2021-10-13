<template>
  <div class="title">
    <h3 class="head">Welcome to the best HP forum</h3>
    <router-link to="/" name="bookList">Book List</router-link> | 
    <router-link to="/tip" name="tip">tips</router-link> |
    <router-link to="/forum" name="forum">Forum</router-link> |
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
body{
  background: cornsilk;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: blue;
  height: 4em;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 1000;
}

h3 {
  margin-left: 1em;
}

button {
  margin-right: 1em;
  padding: 0.6em 1.2em;
  background-color: white;
  color: rgb(219, 167, 248);
  border: 0;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  opacity: 0.8;
}

.head{
  color: white
}
</style>
