import { createStore } from 'vuex';
import api from './axios';

const store = createStore({
  state: {
    items: [],
    loading: false,
    isCreating: false,
    isEditing: false,
    currentItem: null,
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_CREATING(state, isCreating) {
      state.isCreating = isCreating;
    },
    SET_EDITING(state, isEditing) {
      state.isEditing = isEditing;
    },
    SET_CURRENT_ITEM(state, currentItem) {
      state.currentItem = currentItem;
    },
  },
  actions: {
    fetchItems({ commit }) {
      commit('SET_LOADING', true);
      api.get('items/')
        .then(response => {
          commit('SET_ITEMS', response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the items:", error);
        })
        .finally(() => {
          commit('SET_LOADING', false);
        });
    },
    createItem({ commit, dispatch }, newItem) {
      commit('SET_CREATING', true);
      api.post('items/', newItem)
        .then(() => {
          dispatch('fetchItems');
        })
        .catch(error => {
          console.error("There was an error creating the item:", error.response.data);
        })
        .finally(() => {
          commit('SET_CREATING', false);
        });
    },
    deleteItem({ dispatch }, id) {
      if (confirm("Are you sure you want to delete this item?")) {
        api.delete(`items/${id}/`)
          .then(() => {
            dispatch('fetchItems');
          })
          .catch(error => {
            console.error("There was an error deleting the item:", error);
          });
      }
    },
    editItem({ commit }, item) {
      commit('SET_CURRENT_ITEM', { ...item });
      commit('SET_EDITING', true);
    },
    updateItem({ commit, dispatch, state }) {
      api.put(`items/${state.currentItem.id}/`, state.currentItem)
        .then(() => {
          dispatch('fetchItems');
          commit('SET_EDITING', false);
          commit('SET_CURRENT_ITEM', null);
        })
        .catch(error => {
          console.error("There was an error updating the item:", error);
        });
    }
  },
  getters: {
    items: state => state.items,
    loading: state => state.loading,
    isCreating: state => state.isCreating,
    isEditing: state => state.isEditing,
    currentItem: state => state.currentItem
  }
});

export default store;
