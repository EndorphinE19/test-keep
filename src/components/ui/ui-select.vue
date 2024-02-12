<script setup lang="ts">
import { defineProps, defineEmits, computed,ref } from 'vue';

const emit = defineEmits(['update:modelValue'])

const {
    title,
    items,
    labelKey,
    valueKey,
    modelValue
} = defineProps<{
    title: string
    items: any[]
    labelKey: string
    valueKey: string
    modelValue: string | null
}>()

const model = computed({
    get() {
        return modelValue
    },
    set(val) {
        emit('update:modelValue', val)
    }
})

</script>
<template>
    <div class="select">
        <div class="select__title min-title">{{ title }}</div>
        <select v-model="model">
            <option selected value="null">Не выбрано</option>
            <option
            v-for="item in items"
            :key="item[valueKey]"
            :value="item[valueKey]">{{ item[labelKey] }}</option>
        </select>
    </div>
</template>
<style scoped>
.select {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.select__title {
    padding-bottom: 15px;
}
.select select {
    position: relative;
    appearance: none;
    -moz-appearance: none;
    border: none;
    background: rgba(0,0,0,0);
    color: var(--color-link);
    cursor: pointer;
}
</style>