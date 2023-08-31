export default {
    //  data
    data() {
        return {
            styles: {
                display: "none",
            },
        };
    },

    // mothods
    methods: {},

    // mounted
    mounted() {
        // visible rollup box when rolldown
        window.addEventListener("scroll", (e) => {
            e.currentTarget.scrollY >= 200
                ? (this.styles.display = "flex")
                : (this.styles.display = "none");
        });

        // handle click rollup box
        const rollUp = document.querySelector(".rollup-box");
        rollUp.addEventListener("click", function () {
            window.scrollTo(0, 0);
        });
    },
};