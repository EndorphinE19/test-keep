<script setup lang="ts">
import { wrapImagerUrl } from '../../helpers/wrapImageUrl'

const menu = [
    {
        name: 'Главная',
        path: wrapImagerUrl('/src/assets/icons/home.svg')
    },
    {
        name: 'Расписание',
        path: wrapImagerUrl('/src/assets/icons/calendar.svg')
    },
    {
        name: 'Ученики',
        path: wrapImagerUrl('/src/assets/icons/boy.svg')
    },
    {
        name: 'Пользователи',
        path: wrapImagerUrl('/src/assets/icons/teacher.svg')
    },
    {
        name: 'Занятия',
        path: wrapImagerUrl('/src/assets/icons/lesson.svg')
    },
    {
        name: '',
        path: wrapImagerUrl('/src/assets/icons/employees.svg')
    },
]
</script>
<template>
    
    <aside class="sidebar">
        <div class="logo">
            <img src="../../assets/icons/logo.svg" alt="">
        </div>
        <ul class="nav-menu" type="none">
            <li
            v-for="item in menu"
            :key="item.name">
                <img :src="item.path" alt="">
                <span>{{ item.name }}</span>
            </li>
        </ul>
    </aside> 
</template>
<style scoped>
.sidebar {
    background-color: var(--bg-sidebar);
    width: 140px;
    height: 100vh;
}

.logo {
    padding-top: 15px;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
}

.nav-menu li {
    padding: 25px 0 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-white);

    min-height: 110px;
    
    cursor: pointer;
}

.nav-menu li:hover {
    background: var(--bg-hover-sadiebar-elem);
}

.nav-menu li img {
    width: 30px;
}

.nav-menu li span {
    padding-top: 5px;
}
</style>