<template>
    <div class="status">
        <div class="min-title">
            <span>Статус</span>
        </div>
        <div class="status-text">
            <span>
                <div class="status-mark"></div>
                Активен
            </span>
        </div>
    </div>
</template>
<style scoped>
.status {
    padding-right: 50px;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.status-mark {
    width: 10px;
    height: 10px;
    background: var(--color-mark-success);
    margin-right: 5px;
}

.status-text span {
    display: flex;
    align-items: center;
}
</style>