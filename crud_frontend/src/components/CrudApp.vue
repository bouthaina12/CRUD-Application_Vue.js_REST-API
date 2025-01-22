<template>
  <div class="crud-app">
    <h1>CRUD Application</h1>

    <div class="create-item">
      <input v-model="newItem.name" placeholder="Item Name" />
      <input v-model="newItem.description" placeholder="Description" />
      <button @click="createItem" :disabled="isCreating">Add Item</button>
    </div>

    <div v-if="loading">Loading...</div>

    <div class="items-list" v-if="!loading">
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - {{ item.description }}
          <button @click="editItem(item)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
    </div>

    <div v-if="isEditing">
      <h3>Edit Item</h3>
      <input v-model="currentItem.name" />
      <input v-model="currentItem.description" />
      <button @click="updateItem">Update</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      newItem: { name: '', description: '' },
    };
  },
  computed: {
    ...mapState(['loading', 'isCreating', 'isEditing', 'currentItem']),
    ...mapGetters(['items'])
  },
  created() {
    this.fetchItems();
  },
  methods: {
    ...mapActions(['fetchItems', 'createItem', 'deleteItem', 'editItem', 'updateItem']),
    createItem() {
      this.$store.dispatch('createItem', this.newItem).then(() => {
        this.newItem = { name: '', description: '' }; // Clear the form after successful creation
      });
    }
  },
};
</script>

<style scoped>
.crud-app {
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

.create-item input {
  padding: 10px;
  margin: 8px 0;
  width: calc(100% - 20px);
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.create-item button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-item button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.create-item button:hover:not(:disabled) {
  background-color: #45a049;
}

.items-list ul {
  list-style-type: none;
  padding: 0;
}

.items-list li {
  padding: 12px;
  margin: 8px 0;
  background-color: #e9e9e9;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-text {
  font-size: 1rem;
  color: #333;
}

.item-actions button {
  padding: 6px 12px;
  font-size: 0.9rem;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn-edit {
  background-color: #ffa500;
  color: white;
}

.btn-edit:hover {
  background-color: #ff8c00;
}

.btn-delete {
  background-color: #f44336;
  color: white;
}

.btn-delete:hover {
  background-color: #e53935;
}

.edit-item input {
  padding: 10px;
  margin: 8px 0;
  width: calc(100% - 20px);
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.edit-item button {
  padding: 10px 20px;
  background-color: #2196F3;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-item button:hover {
  background-color: #1976D2;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}
</style>
