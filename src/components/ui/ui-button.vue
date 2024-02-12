<script setup lang="ts">

</script>
<template>
    <button class="button">
        <slot></slot>
    </button>
</template>
<style scoped>
.button {
    width: 240px;
    height: 40px;

    display:flex;
    justify-content: center;
    align-items: center;

    background: var(--bg-button);
}
</style>