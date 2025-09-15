<template>
    <div id="boxButton">
        <button id="mainButton">
            <Play size="4rem"/>
        </button>
    </div>



</template>
<script setup>
import { Play } from 'lucide-vue-next'
 

</script>
<style scoped>
#boxButton{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
}
#mainButton{
    width:65%;
    height:40%;
    border-radius:25%;
    border:2px solid var(--color-main);
    box-shadow:2px 10px 20px var(--accent);
    background:linear-gradient(135deg,var(--color-two-main),var(--accent));
    transition:transform 0.3s ease;
}
#mainButton:hover{
    transform:scale(1.05) translateY(-10px);
}
</style>