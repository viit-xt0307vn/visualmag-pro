<template>
    <section class="featured">
        <FeaturedItem v-for="(post, index) in posts" :key="index" :post="post" />
    </section>
</template>

<script>
import FeaturedItem from '@/components/FeaturedItem'
export default {
    components: {
        FeaturedItem,
    },
    data() {
        return {
            posts: []
        }
    },
    async created() {
        await this.featurePost()
    },
    methods: {
        async featurePost() {
            const params = {
                api_key: process.env.API_KEY,
                website_id: process.env.WEBSITE_ID,
                limit: 5
            }
            const response = await this.$axios.get(`manager/posts/json/1.json`, { params })
            if (response.data.status_code === 1) {
                this.posts = response.data.data
            }
        }
    },

}
</script>

<style lang="scss" scoped>
// Featured
.featured {
    width: 100%;
    height: 384px;
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 20px;
    position: relative;
}

@media screen and (max-width: 960px) {
    .featured {
        height: 300px;
    }
}

@media screen and (max-width: 782px) {
    .featured {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 192px);
        height: auto;

        &-item:first-child {
            grid-column: 1/3;
            grid-row: 1/3;

            .featured-title {
                font-size: 28px;
            }
        }
    }
}
</style>