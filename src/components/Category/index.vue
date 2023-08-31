<template>
    <div class="category">
        <nuxt-link :to="param"><p class="category-name">{{ category }}</p></nuxt-link>
        <p class="category-number">{{ quantity }}</p>
    </div>
</template>

<script setup>
defineProps({
    category: "string",
    quantity: "number",
    param: "string"
})
</script>

<style lang="scss" scoped>
.category {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #e9e9e9;

    &-name {
        cursor: pointer;
    }


    &-number {
        height: 24px;
        width: 24px;
        background-color: #e9e9e9;
        color: #666666;
        font-size: 11px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

}
</style>