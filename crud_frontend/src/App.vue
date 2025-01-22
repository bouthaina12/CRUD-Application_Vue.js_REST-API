<template>
  <div id="app">
    <nav class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/filtered-items">Filtered Items</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 10px;
}

.menu a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2rem;
}

.menu a:hover {
  text-decoration: underline;
}
</style>
