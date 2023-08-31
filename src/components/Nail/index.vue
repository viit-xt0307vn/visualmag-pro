<template>
    <section class="layout-flex-vertical gap24">
        <HeadingSection nameHeading="Nail" />
        <div class="layout-flex-horizontal gap24">
            <PostSmall :post="post" v-for="(post, index) in posts" :key="index" />
        </div>
    </section>
</template>

<script>
import HeadingSection from "@/components/HeadingSection";
import PostSmall from "@/components/PostSmall";
export default {
    components: {
        PostSmall,
        HeadingSection
    },
    data() {
        return {
            posts: []
        }
    },

    // methods
    methods: {

        // get football post
        async nailPost() {
            const params = {
                api_key: process.env.API_KEY,
                website_id: process.env.WEBSITE_ID,
                limit: 3,
                category_slug: 'nail',
                get_posts: 1,
                post_limit: 3,
                post_page: 1,
                get_meta: 1
            }
            const response = await this.$axios.get(`manager/posts/json/1.json`, { params })
            if (response.data.status_code === 1) {
                this.posts = response.data.data
            }
        }
    },

    // created
    async created() {
        await this.nailPost()
    },


}
</script>
