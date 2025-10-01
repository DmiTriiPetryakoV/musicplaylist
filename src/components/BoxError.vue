<template>
<div id="BoxError">
     <span v-if="isLoading" id="krug"></span>
    <p v-else-if="noResults" class="no-results-message">
        Найти музыку не удалось
    </p>  
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useLoadingStore } from '../store/loading';
const loadingStore = useLoadingStore();
const { isLoading, noResults } = storeToRefs(loadingStore);
</script>

<style scoped>
#BoxError{
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
}
#krug{
    width: 3rem;
    height: 3rem;
    background: transparent;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    transition:all 0.3s ease;
    animation: smooth-spin 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}

@keyframes smooth-spin {
    0% { 
        transform: rotate(0deg);
        border-top-color: white;
        border-right-color: rgba(255, 255, 255, 0.1);
    }
    25% { 
        transform: rotate(90deg);
        border-top-color: white;
        border-right-color: rgba(255, 255, 255, 0.3);
    }
    50% {
        transform: rotate(180deg);
        border-top-color: rgba(255, 255, 255, 0.5);
        border-right-color: white;
    }
    75% {
        transform: rotate(270deg);
        border-top-color: rgba(255, 255, 255, 0.7);
        border-right-color: white;
    }
    100% { 
        transform: rotate(360deg);
        border-top-color: white;
        border-right-color: rgba(255, 255, 255, 0.9);
    }
}
.no-results-message {
    color: var(--accent);
    font-size: 1.3rem;
}


</style>