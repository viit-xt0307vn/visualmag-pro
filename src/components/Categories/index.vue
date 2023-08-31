<template>
    <div class="categories-card">
        <CategoryCard v-for="(category, index) in categories" :category="category" :key="index" />
    </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard"
export default {
    props: {
        categories: {
            type: Array,
            default: () => []
        }
    },
    components: {
        CategoryCard,
    }
}
</script>

<style lang="scss" scoped>
.categories-card {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}
</style>