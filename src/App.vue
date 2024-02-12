<script setup lang="ts">
import appHeader from './components/widgets/app-header.vue';
import sidebar from './components/widgets/app-sidebar.vue'
import document from './page/document.vue'

</script>

<template>
  <div class="cabinet">
    <app-header></app-header>
    <sidebar></sidebar>
    <document></document>
    
  </div>
</template>

<style scoped>
.cabinet {
  width: 100%;
  background: var(--bg-main);

  position: relative;
}
</style>
