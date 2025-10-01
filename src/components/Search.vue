<template>
    <div id="boxSearch">
        <div id="sectionSearchAndLupa">
            <div id="lupaSearch" @click="lupa"></div>
            <span id="pal"></span>
            <input  ref="activeInput" id="searchInput" placeholder="Search" maxlength="35" v-model="query" @keyup.enter = "searchMusic"/>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useTrackStore } from "../store/tracks";
import { useLoadingStore } from "../store/loading";
const API_BASE_URL = `https://deezer-proxy-backend.onrender.com`
const trackStore = useTrackStore()
const loadingStore = useLoadingStore();
const query = ref()
const tracks = ref([])
const activeInput = ref(null)
const noResults = ref(false)
const lupa = () =>{
    if(activeInput.value){
    activeInput.value.focus()
    }
searchMusic()
}
async function searchMusic() {
    if(!query.value) return;
    loadingStore.startLoading(query.value); 
   try{
    const response = await fetch(
         `${API_BASE_URL}/search?q=${encodeURIComponent(query.value)}`  
  );
  const data = await response.json();
    if(data.data && data.data.length > 0) {
            trackStore.setQuery(query.value);
            trackStore.setTracks(data.data);
            loadingStore.stopLoading();
       } else {
            loadingStore.showNoResults();
            trackStore.setTracks([]); 
        }
        
    } catch (error) {
        console.error('Search error:', error);
        loadingStore.showNoResults();
}
}


</script>

<style scoped>
#boxSearch{
    width:100%;
    height:100%;
    display:grid; 
    grid-template-rows:80% 20%;
    gap:2.5rem;
    align-items:center;
    justify-items:center;
}
#searchInput{
    width:100%;
    height:100%;
    font-size:1rem;
    color:var(--accent);
    transition:transform 0.5s ease, box-shadow 0.5s ease ;
    border: none;
    background: transparent;
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    align-self:center;
}
#searchInput::placeholder{
    color:var(--accent);
}
#sectionSearchAndLupa{
    width:90%;
    height:75%;
    grid-template-columns:23% 2% 75%;
    align-content:center;
    align-items:center;
    display:grid;
    margin-top:1rem;
    border:1px solid var(--accent);
    border-radius:3rem;
    align-items:center;
    background-color:var(--color-two-main);
    box-sizing:border-box;
}
#lupaSearch{
    background-image:url('/musicplaylist/lupabg.png');
    width:3rem;
    height:3rem;
    display:flex;
    background-size:cover;
    margin-left:1rem;
    align-self:center;
}
#pal{
    width:20%;
    height:60%;
    background-color:var(--color-main);
    align-self:center;
}

</style>