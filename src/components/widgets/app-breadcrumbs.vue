<script setup lang="ts">

const breadcrumbsList = [
    {
        name: 'Главная',
        value: 'main',
        next: 'student',
    },
    {
        name: 'Ученики',
        value: 'student',
        next: 'document'
    },
    {
        name: 'Документы',
        value: 'document',
        next: ''
    },
];

</script>
<template>
    <div class="breadcrumbs">
        <div
        v-for="(item, i) in breadcrumbsList"
        :key="item.value"
        class="breadcrumbs__nav">
            <span
            class="breadcrumbs__elem"
            :class="{ 'breadcrumbs__finish': !item.next }"> {{ item.name }}</span>
            <span v-if="i !== breadcrumbsList.length - 1" class="breadcrumbs__separator">/</span>
        </div>
    </div>
</template>
<style scoped>
.breadcrumbs {
    display: flex;
    justify-content: flex-start;
}
.breadcrumbs__elem {
    cursor: pointer;
}
.breadcrumbs__finish {
    color: #86939C;
    cursor: default;
}
.breadcrumbs__separator {
    padding: 0 10px;
}
</style>