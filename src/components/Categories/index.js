import CategoryCard from "@/components/CategoryCard/index.vue";

export default {
    // props
    props: {
        categories: {
            type: Array,
            default: () => [],
        },
    },
    // components
    components: {
        CategoryCard,
    },
};