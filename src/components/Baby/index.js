import PostSmall from "@/components/PostSmall/index.vue";
import HeadingSection from "@/components/HeadingSection/index.vue";
export default {
    // data
    data() {
        return {
            posts: [],
        };
    },

    // components
    components: {
        PostSmall,
        HeadingSection,
    },

    // methods
    methods: {
        // get football post
        async footballPost() {
            const params = {
                api_key: process.env.API_KEY,
                website_id: process.env.WEBSITE_ID,
                limit: 4,
                random: 1,
            };
            const response = await this.$axios.get(
                `manager/posts/json/1.json`,
                { params }
            );
            if (response.data.status_code === 1) {
                this.posts = response.data.data;
            }
        },
    },

    // created
    async created() {
        await this.footballPost();
    },
};
