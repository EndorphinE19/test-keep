<script setup lang="ts">
import AppCard from '../components/widgets/app-card.vue'
import AppCardUser from '../components/widgets/user/app-card-user.vue'
import UiSelect from '../components/ui/ui-select.vue'
import UiButton from '../components/ui/ui-button.vue'
import AppDocumentUser from '../components/widgets/user/app-document-user.vue'
import {useUser} from '../uses/useUser'
import { onMounted, ref, computed, watch } from 'vue'


const { 
    state,
    getUsers,
 } = useUser();

const typeDomen = [
    {
        name: 'org',
        value: 'org',
    },
    {
        name: 'net',
        value: 'net',
    },
    {
        name: 'tv',
        value: 'tv',
    },
];

const typeNumberCode = [
    {
        name: '010',
        value: '010',
    },
    {
        name: '1',
        value: '1',
    },
    {
        name: '493',
        value: '493',
    },

]

const domen = ref<string | null>(null)
const code = ref<string | null>(null)
const resSort = ref<any[] | null>(null)

watch([domen, code, () => state.users], () => {

    resSort.value = state.users

    if ((domen.value === 'null') || (code.value === 'null')) resSort.value = state.users

    if (state.users) {
        if (domen.value && domen.value !== 'null') {
            resSort.value = resSort.value.filter(i => i.website.split('.')[1] === domen.value)
        }
        if (code.value && code.value !== 'null') {
            resSort.value = resSort.value.filter(i => i.phone.split('-')[0] === code.value)
        }
        
        return
    }

})


 onMounted(async () => {
    await getUsers()
 })
</script>
<template>
    <div class="document">
        <app-card>
            <app-card-user></app-card-user>
        </app-card>
        <div class="document__filter-panel">
            <ui-select
            v-model="domen"
            title="Тип ссылки"
            :items="typeDomen"
            label-key="name"
            value-key="value"></ui-select>
            <ui-select
            v-model="code"
            :items="typeNumberCode"
            title="Код страны"
            label-key="name"
            value-key="value"></ui-select>
            <ui-button class="document__filter-panel-btn">Добавить документ</ui-button>
        </div>
        <app-document-user
        v-if="resSort"
        :items="resSort"></app-document-user>
    </div>
</template>
<style scoped>
.document {
    position: absolute;
    top: var(--height-header);
    right: 0;
    height: calc(100vh - var(--height-header));
    width: calc(100% - var(--width-sidebar));

    padding: 35px 45px;
    overflow: hidden;
    overflow-y: auto;
}

.document__filter-panel {
    padding-top: 100px;
    padding-bottom: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.document__filter-panel-btn {
    margin: 0 0 0 auto;
}

.document__filter-panel > div {
    margin-right: 50px;
}
</style>