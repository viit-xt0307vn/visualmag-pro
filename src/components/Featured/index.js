import FeaturedItem from "@/components/FeaturedItem/index.vue";

export default {
    //  components
    components: {
        FeaturedItem,
    },

    // data
    data() {
        return {
            posts: [],
        };
    },

    // created
    async created() {
        await this.featurePost();
    },

    // methods
    methods: {
        async featurePost() {
            const params = {
                api_key: process.env.API_KEY,
                website_id: process.env.WEBSITE_ID,
                limit: 5,
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
};