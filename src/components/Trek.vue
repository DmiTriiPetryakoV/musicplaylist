<template>
<div id="boxmusic">
    <div id="music">
        <div id="boxButtonPlayer">
        <button id="playerMusic">
            <Play size="1.2rem"/>
        </button>
        </div>
        <p  id="avtor"> {{track?.title}} </p>
        <p id="nameTrek">  {{track?.artist?.name}}</p>
    </div>
</div>

</template>
<script setup>
import { computed } from "vue";
import { useTrackStore } from "../store/tracks"; 
import { Play } from 'lucide-vue-next'
const trackStore = useTrackStore();
const tracks = computed(() => trackStore.tracks);
</script>
<style scoped>
#boxmusic{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
    z-index:1000;
}
#music{
    width:90%;
    height:35%;
    background-color:var(--color-two-main);
    border-radius:3rem;
    display:grid;
    grid-template-columns:25% 60% 15%;
    grid-template-rows:50% 50%;
    font-size:1rem;
    border:1px solid var(--accent);
    align-content:center;
    align-items:center;
    align-self:center;
}
#avtor{
    display:flex;
    grid-row:1;
    grid-column:2;
    font-weight:1000;
    color:var(--accent);
    font-size:1.05rem;
}
#nameTrek{
    display:flex;
    grid-column:2;
    grid-row:2;
    color:var(--accent);
}
#boxButtonPlayer{
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-content:center;
    align-items:center;
    grid-row:span 2;
}
#playerMusic{
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
    width:50%;
    height:65%;
    border-radius:50%;
    border:2px solid var(--color-main);
    background:linear-gradient(135deg,var(--color-two-main),var(--accent));
    grid-row:span 2;
}




</style>