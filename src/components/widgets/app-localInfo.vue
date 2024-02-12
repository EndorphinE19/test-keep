<script setup lang="ts">
import { defineProps } from 'vue'

type Items = {
    title: string
    content: string
}[]

const {
    items,
} = defineProps<{
    items: Items
}>()

</script>
<template>
    <div class="local-info">
        <div class="local-info__container" v-for="item in items" :key="item.title">
            <div class="localInfo__title min-title">
                <span>{{ item.title }}</span>
            </div>
            <div class="localInfo__content">
                <span>{{ item.content || 'Нет информации' }} </span>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
.local-info {
    display: flex;
    min-width: 300px;
    max-width: 400px;
    flex-wrap: wrap;
}
.local-info__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    min-width: 140px;
    max-width: 250px;
}

.local-info__container:first-of-type,
.local-info__container:nth-of-type(2) {
    padding-bottom: 15px;
}

</style>