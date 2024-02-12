<script setup lang="ts">
import { wrapImagerUrl } from '../../../helpers/wrapImageUrl';
import AppLocalInfo from '../app-localInfo.vue'
import AppStatus from '../app-status.vue'

const localInfo = [
    {
        title: 'Телефон',
        content: '8-900-000-00-00',
    },
    {
        title: 'Телефон родителей',
        content: '8-900-000-00-00',
    },
    {
        title: 'Дата рождения',
        content: '25.04.2004',
    },
    {
        title: 'Адрес',
        content: 'г.Краснодар, ул.Советская 24, кв. 208',
    },
]
</script>
<template>
    <div class="card-user">
        <div class="card-user__main">
            <div class="card-user__contact">
                <img :src="wrapImagerUrl('/src/assets/image/avatar-g.png')" alt="">
                <div class="card-user__contact-wrap">
                    <div class="card-user__title-name">
                        <span>
                            Абрамова Екатерина     
                        </span>
                        <img :src="wrapImagerUrl('/src/assets/image/Girl.png')" alt="">
                    </div>
                    <div class="card-user__link">
                        <div class="card-user__link-img">
                            <img :src="wrapImagerUrl('/src/assets/icons/whatsapp.svg')" alt="">
                        </div>
                        <div class="card-user__link-img">
                            <img :src="wrapImagerUrl('/src/assets/icons/viber.svg')" alt="">
                        </div>
                        <div class="card-user__link-img">
                            <img :src="wrapImagerUrl('/src/assets/icons/telegram.svg')" alt="">
                        </div>
                        <a href="">Комментарии</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-user__info">
            <app-status></app-status>
            <app-local-info
            :items="localInfo"></app-local-info>
        </div>
        <div class="card-user__options">
            <img :src="wrapImagerUrl('/src/assets/icons/edit.svg')" alt="">
            <img :src="wrapImagerUrl('/src/assets/icons/bin.svg')" alt="">
        </div>
    </div>
</template>

<style scoped>
.card-user {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-user__main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.card-user__title-name span {
    padding-right: 20px;
    font-size: 30px;
    color: var(--color-title-name);
}

.card-user__contact {
 padding-left: 45px;
 display: flex;
}
.card-user__contact-wrap {
    padding-left: 45px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
.card-user__link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.card-user__link-img {
    padding-right: 10px;
}

.card-user__link-img:last-of-type {
    padding-right: 25px;
}

.card-user__info {
    display: flex;
}



.card-user__options {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: stretch;
}

.card-user__options img {
    width: 25px;
}
</style>