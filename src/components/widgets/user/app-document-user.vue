<script setup lang="ts">
import AppCard from '../app-card.vue'
import AppStatus from '../app-status.vue'
import { wrapImagerUrl } from '../../../helpers/wrapImageUrl';
import { defineProps } from 'vue'
 
const {
    items
} = defineProps<{
    items: any[]
}>()

</script>
<template>
    <div class="document-user">
        <app-card
        v-for="item in items"
        :key="item.username"
        class="document-user__box">
            <div class="document-user__container">
                <div class="document-user__info">
                    <div class="document-user__title">
                        {{ item.name }}
                    </div>
                    <div class="document-user__status">
                        <app-status></app-status>
                    </div>
                    <div class="document-user__date">
                        <span class="min-title">{{ item.phone }}</span>
                    </div>
                    <div class="document-user__options">
                        <div class="document-user__options-img"><img :src="wrapImagerUrl('/src/assets/icons/printer.svg')" alt=""></div>
                        <div class="document-user__options-img"><img :src="wrapImagerUrl('/src/assets/icons/edit.svg')" alt=""></div>
                        <div class="document-user__options-img"><img :src="wrapImagerUrl('/src/assets/icons/bin.svg')" alt=""></div>
                    </div>
                </div>
                <div class="document-user__image">
                    <img :src="wrapImagerUrl('/src/assets/image/stub.png')" alt="">
                </div>
            </div>
        </app-card>
    </div>
</template>
<style scoped>

.document-user {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.document-user__box {
    max-width: 370px;
    width: 100%;
    margin-bottom: 20px;
}
.document-user__container {
    width: 100%;
    display: flex;
    justify-content: space-between;

}
.document-user__info {
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.document-user__options {
    display: flex;
    justify-content: space-between;

    padding-top: 15px;
}
.document-user__options-img {
    cursor: pointer;
    margin-right: 20px;
}
.document-user__options-img:last-of-type {
    margin-right: 0;
}

.document-user__title {
    width: 200px;
    font-size: 23px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
}
</style>