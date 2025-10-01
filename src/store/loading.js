import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isLoading: false,
    noResults: false,
    searchQuery: ''
  }),
  
  actions: {
    startLoading(query = '') {
      this.isLoading = true;
      this.noResults = false;
      this.searchQuery = query;
    },
    
    stopLoading() {
      this.isLoading = false;
    },
    
    showNoResults() {
      this.isLoading = false;
      this.noResults = true;
    },
    
    reset() {
      this.isLoading = false;
      this.noResults = false;
      this.searchQuery = '';
    }
  }
});