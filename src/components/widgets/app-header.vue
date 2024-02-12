<script setup lang="ts">
import breadcrumbs from './app-breadcrumbs.vue'
import avatar from './app-avatar.vue'

</script>
<template>
    <div class="header">
        <breadcrumbs></breadcrumbs>
        <avatar></avatar>
    </div>    
</template>
<style scoped>
.header {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - var(--width-sidebar));
    height: var(--height-header);

    background-color: var(--bg-white);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 55px;
}
</style>