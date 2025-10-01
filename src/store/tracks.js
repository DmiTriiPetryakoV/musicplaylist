import { defineStore } from 'pinia';

export const useTrackStore = defineStore('tracks', {
  state: () => ({
    tracks: [],
    query:""
  }),
  actions: {
    setTracks(list) {
      this.tracks = list;
    },
    setQuery(q){
      this.query = q;
    }
  }
});