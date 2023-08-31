<template>
    <nuxt-link :to="`/tag/${tag?.slug}`">
        <p class="tag">{{ tag?.name }}</p>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        tag: {
            type: Object,
            default: () => { }
        }
    }
}
</script>

<style lang="scss" scoped>
.tag {
    padding: 4px 8px;
    background-color: #F0F0F0;
    color: #555555;
    display: inline-block;
    font-size: 13px;
    cursor: pointer;
}
</style>