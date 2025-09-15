<template>
    <div id="sectionMain">
      <ButtonMain />
      <Trek/>
      <Tabbar/>
    </div>
</template>
<script setup>
import ButtonMain from "./components/BtnMain.vue";
import Tabbar from "./components/Tabbar.vue";
import Trek from "./components/Trek.vue";

</script>
<style scoped>
#sectionMain{
  width:100%;
  height:100%;
  background:linear-gradient(135deg , var(--color-main), var(--accent));
  display:grid;
  grid-auto-rows: 75% 15% 10%;
}

</style>