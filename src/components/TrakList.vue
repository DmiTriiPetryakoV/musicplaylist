<template>
    <div id="boxTracks">
        <div class="trekSection" v-for="track in tracks" :key="track.id">
            <p id="trek">{{ track?.title }}</p>
            <p id="avtor">{{ track?.artist?.name }}</p>
        </div>
    </div>
</template>
<script setup>
import { Play } from 'lucide-vue-next'
import { computed } from "vue";
import { useTrackStore } from "../store/tracks"; 
const trackStore = useTrackStore();
const tracks = computed(() => trackStore.tracks);

</script>
<style scoped>
#boxTracks{
    width:100%;
    height:100%;
    display:grid;
    grid-template-rows:repeat(4,1fr);
    justify-items:center;
    align-content:center;
    align-items:center;
}
.trekSection{
    width:90%;
    height:65%;
    background-color:var(--color-two-main);
    border-radius:5px;
    border:2px solid var(--grey);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08),0 1px 4px rgba(0, 0, 0, 0.12);
    display:grid;
    grid-template-columns:80% 20%;
    grid-template-rows:60% 40%;
    animation: smoothAppear 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    align-content:center;
    align-items:center;
    box-sizing: border-box;
    justify-self:center;
}
.trekSection:hover {
    box-shadow: 
        0 8px 30px rgba(0, 0, 0, 0.15),
        0 4px 12px var(--accent),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    border-color: var(--accent);
}
#trek{
    font-size:1.05rem;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    grid-column:1;
    font-weight:1000;
}
#avtor{ 
    font-size: 0.9rem;
    grid-column:1;
}

@keyframes smoothAppear {
    0% {
        opacity: 0;
        transform: translateY(-15px) rotateX(10deg);
    }
    100% {
        opacity: 1;
        transform: translateY(0) rotateX(0);
    }
}

</style>