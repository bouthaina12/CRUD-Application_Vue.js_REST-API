<template>
    <div class="filtered-items">
      <h1>Filtered Items</h1>
      <input v-model="filter" placeholder="Search by title" />
      <ul>
        <li v-for="item in filteredItems" :key="item.id">
          {{ item.name }} - {{ item.description }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        filter: '',
      };
    },
    computed: {
      ...mapGetters(['items']),
      filteredItems() {
        return this.items.filter(item =>
          item.name.toLowerCase().includes(this.filter.toLowerCase())
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .filtered-items {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 2em;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  
  input {
    padding: 10px;
    margin: 8px 0;
    width: calc(100% - 20px);
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  </style>
  