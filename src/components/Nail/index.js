import { HeadingSection, PostSmall } from "@/components";

export default {
    // components
    components: {
        PostSmall,
        HeadingSection,
    },

    // data
    data() {
        return {
            posts: [],
        };
    },

    // methods
    methods: {
        // get football post
        async nailPost() {
            const params = {
                api_key: process.env.API_KEY,
                website_id: process.env.WEBSITE_ID,
                limit: 3,
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
        await this.nailPost();
    },
};