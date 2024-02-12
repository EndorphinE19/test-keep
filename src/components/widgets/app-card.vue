<script setup lang="ts">

</script>
<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
.card {
    width: 100%;

    background: var(--bg-white);

    border-radius: 15px;

    padding: 15px;

    min-height: 150px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>