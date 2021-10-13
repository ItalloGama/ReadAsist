<template>
  <div>
    <h3>{{name}}{{price}}</h3>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    name: String,
    description: String,
    price: Number
  }
}
</script>

<style>
</style>