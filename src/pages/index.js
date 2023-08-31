import WidgetOneColumn from "@/components/WidgetOneColumn/WidgetOneColumn.vue";
import Loading from "@/components/Loading/Loading.vue";
import mixinApp from "@/mixins/mixinApp.js";
import Featured from "@/components/Featured";
import HeadingSection from "@/components/HeadingSection";
import PostLarge from "@/components/PostLarge";
import PostTiny from "@/components/PostTiny";
import PostSmall from "@/components/PostSmall";
import IconsConnect from "@/components/IconsConnect";
import PostMedium from "@/components/PostMedium";
import PostHorizontal from "@/components/PostHorizontal";
import Football from "@/components/Football";
import Nail from "@/components/Nail";
import Car from "@/components/Car";
import Fashion from "@/components/Fashion";
import Baby from "@/components/Baby";
import Tattoo from "@/components/Tattoo";
import Lifestyle from "@/components/Lifestyle";

export default {
    mixins: [mixinApp],

    /* --------------------------------------------------
    components
  -------------------------------------------------- */
    components: {
        WidgetOneColumn,
        Loading,
        Featured,
        HeadingSection,
        PostLarge,
        PostTiny,
        PostSmall,
        IconsConnect,
        PostMedium,
        PostHorizontal,
        Football,
        Nail,
        Car,
        Fashion,
        Baby,
        Tattoo,
        Lifestyle,
    },

    /* --------------------------------------------------
    asyncData
  -------------------------------------------------- */
    async asyncData(context) {
        context.$setLoading(true);
        const params = {
            api_key: context.env.API_KEY,
            website_id: context.env.WEBSITE_ID,
            status: 1,
            get_posts: 1,
            display_home: 1,
            limit: 3,
            page: 1,
            get_posts: 1,
        };

        const pageData = {
            pageNo: 1,
        };
        const response = await context.$axios.get(
            `manager/categories/json/1.json`,
            { params }
        );
        if (response.data.status_code === 1) {
            pageData.categories = response.data.data;
            pageData.totalPage = response.data.total_page;
            pageData.pageNo++;
            pageData.metaDescription = "";
            pageData.metaYoastSeo = context.store.state.common.storeLoadInit.settings["yoast-seo"];
        }
        context.$setLoading(false);
        return pageData;
    },

    /* --------------------------------------------------
    data
  -------------------------------------------------- */
    data() {
        return {
            categories: [],
            totalPage: 0,
            pageNo: 1,
            ads: [],
            isLoading: false,
        };
    },

    /* --------------------------------------------------
    methods
  -------------------------------------------------- */
    methods: {
        /**
         * Get categories home
         */
        async getPosts() {
            if (this.isLoading) {
                return;
            }
            this.isLoading = true;
            const params = {
                api_key: process.env.API_KEY,
                website_id: process.env.WEBSITE_ID,
                status: 1,
                get_posts: 1,
                display_home: 1,
                limit: 3,
                get_posts: 1,
                page: this.pageNo,
            };
            const response = await this.$axios.get(
                `manager/categories/json/1.json`,
                { params }
            );
            if (response.data.status_code === 1) {
                this.categories.push(...response.data.data);
            }
            this.pageNo++;
        },

        /**
         * Get ads
         */
        async getAds() {
            const params = {
                api_key: context.env.API_KEY,
                website_id: context.env.WEBSITE_ID,
            };
            const response = await this.$axios.get(
                `manager/advertises/json/1.json`,
                { params }
            );
            if (response.data.status_code === 1) {
                this.ads = response.data.data;
                this.isLoad = true;
            }
        },
    },

    mounted() {
        window.addEventListener("scroll", async (e) => {
            const listElm = document.querySelector("#infinite-list");
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;
            if (listElm && scrollTop + clientHeight >= listElm.offsetTop) {
                if (
                    this.isLoading ||
                    this.pageNo > this.totalPage ||
                    this.pageNo === 1
                ) {
                    return;
                }
                await this.getPosts();
                setTimeout(() => {
                    this.isLoading = false;
                }, 500);
            }
        });
    },
};
