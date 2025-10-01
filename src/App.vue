<template>
    <div id="sectionMain">
      <Search/>
      <BoxError/>
      <TrakList />
      <Trek />
      <Tabbar/>
    </div>
</template>
<script setup>
import TrakList from "./components/TrakList.vue";
import Tabbar from "./components/Tabbar.vue";
import Trek from "./components/Trek.vue";
import Search from "./components/Search.vue"
import { onMounted, ref } from "vue";
import { Router } from "lucide-vue-next";
import BoxError from "./components/BoxError.vue";
const tracks = ref([])



</script>
<style scoped>
#sectionMain{
  width:100%;
  height:100%;
  background-color:var(--color-main);
  display:grid;
  grid-auto-rows:10% 7% 53% 21% 9%;
}

</style>