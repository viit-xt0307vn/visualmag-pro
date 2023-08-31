<template>
    <div>
        <section class="followus">
            <HeadingSection nameHeading="Follow us" />
            <div class="followus-container">
                <IconsConnect />
            </div>
        </section>

        <section class="recents">
            <HeadingSection nameHeading="Most commented posts" />

            <div class="recents-container">
                <PostRecent v-for="(post, index) in randomPosts" :post="post" :key="index" />
            </div>
        </section>

        <section class="tags">
            <HeadingSection nameHeading="Tags" />
            <div class="tags-container">
                <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" />
            </div>
        </section>
    </div>
</template>

<script>
import HeadingSection from "@/components/HeadingSection"
import PostRecent from "@/components/PostRecent"
import Category from "@/components/Category"
import Tag from "@/components/Tag"
import IconsConnect from "@/components/IconsConnect"

export default {
    /* --------------------------------------------------
      components
    -------------------------------------------------- */
    components: {
        HeadingSection,
        PostRecent,
        Category,
        Tag,
        IconsConnect,
    },

    /* --------------------------------------------------
      data
    -------------------------------------------------- */
    data() {
        return {
            tags: [],
            randomPosts: []
        }
    },

    /* --------------------------------------------------
      created
    -------------------------------------------------- */
    async created() {
        await this.getTags()

        await this.getPostRamdom()
    },

    /* --------------------------------------------------
      methods
    -------------------------------------------------- */
    methods: {
        async getTags() {
            const params = {
                api_key: process.env.API_KEY,
                website_id: process.env.WEBSITE_ID,
                status: 1,
                limit: 10
            }

            const response = await this.$axios.get(`manager/tags/json/1.json`, { params })
            if (response.data.status_code === 1) {
                this.tags = response.data.data
            }
        },

        async getPostRamdom() {

            const params = {
                api_key: process.env.API_KEY,
                website_id: process.env.WEBSITE_ID,
                limit: 10,
                random: 1,
            }

            const response = await this.$axios.get(`manager/posts/json/1.json`, { params })
            if (response.data.status_code === 1) {
                this.randomPosts = response.data.data
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.followus-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 9px;
}

// Recents Post
.recents {
    width: 100%;
    margin-top: 31px;

    &-container {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
}

// Category
.categories {
    margin-top: 30px;

    &-container {
        display: flex;
        flex-direction: column;
        gap: 12px 0;
        margin-top: 24px;
    }
}

// Tags
.tags {
    margin-top: 30px;

    &-container {
        margin-top: 24px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
}
</style>