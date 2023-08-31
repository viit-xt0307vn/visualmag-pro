<template>
    <section class="layout-flex-vertical gap24">
        <HeadingSection nameHeading="Tattoo" />

        <div class="layout-flex-vertical gap24">
            <PostTiny v-for="(post, index) in posts" :post="post" :key="index"/>
        </div>
    </section>
</template>

<script>
import PostTiny from "@/components/PostTiny";
import HeadingSection from "@/components/HeadingSection";
export default {

    // data
    data() {
        return {
            posts: []
        }
    },
    components: {
        PostTiny,
        HeadingSection,
    },

    // methods
    methods: {

        // get football post
        async footballPost() {
            const params = {
                api_key: process.env.API_KEY,
                website_id: process.env.WEBSITE_ID,
                limit: 5,
                random: 1
            }
            const response = await this.$axios.get(`manager/posts/json/1.json`, { params })
            if (response.data.status_code === 1) {
                this.posts = response.data.data
            }
        }
    },

    // created
    async created() {
        await this.footballPost()
    },
}
</script>

<style lang="scss" scoped></style>