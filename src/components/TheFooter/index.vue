<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer-box-list">
                <div class="footer-box">
                    <h1 class="footer-heading">Introduction</h1>
                    <ul class="footer-list">
                        <li class="footer-item">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris enim velit, laoreet non feugiat et,
                            gravida a nibh. Sed at ex.
                        </li>
                    </ul>
                </div>
                <div class="footer-box">
                    <h1 class="footer-heading">Company</h1>
                    <ul class="footer-list">
                        <li class="footer-item">About Us</li>
                        <li class="footer-item">Meet Our Team</li>
                        <li class="footer-item">News</li>
                        <li class="footer-item">Contact Us</li>
                    </ul>
                </div>
                <div class="footer-box">
                    <h1 class="footer-heading">Products</h1>
                    <ul class="footer-list">
                        <li class="footer-item">Services</li>
                        <li class="footer-item">Products List</li>
                        <li class="footer-item">Plans & Pricing</li>
                        <li class="footer-item">Partners</li>
                    </ul>
                </div>
                <div class="footer-box">
                    <h1 class="footer-heading">Newsletter</h1>
                    <ul class="footer-list">
                        <li class="footer-item">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </li>
                        <li class="footer-item subscribe">
                            <a class="subscribe-link" href="#">Subscribe now!</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-more">
                <p class="footer-more-item">Single Page</p>
                <p class="footer-more-item">Full Width</p>
                <p class="footer-more-item">404 Page</p>
                <p class="footer-more-item">Search Results</p>
            </div>
            <p class="footer-themeby">WordPress Theme by WPEnjoy</p>
            <div class="footer-connect">
                <div class="icon-wrapper" style="--clr: #1da1f2"><font-awesome-icon icon="fa-brands fa-facebook"
                        class="icon" /></div>
                <div class="icon-wrapper" style="--clr: #1778f2"><font-awesome-icon icon="fa-brands fa-twitter"
                        class="icon" /></div>
                <div class="icon-wrapper" style="--clr: #f53f97"><font-awesome-icon icon="fa-brands fa-instagram"
                        class="icon" /></div>
                <div class="icon-wrapper" style="--clr: #fa0000"><font-awesome-icon icon="fa-brands fa-youtube"
                        class="icon" /></div>
                <div class="icon-wrapper" style="--clr: #e64b87"><font-awesome-icon icon="fa-brands fa-dribbble"
                        class="icon" /></div>
                <div class="icon-wrapper" style="--clr: #0d66c2"><font-awesome-icon icon="fa-brands fa-linkedin"
                        class="icon" /></div>

            </div>
        </div>
        <div class="rollup-box" :style="{ 'display': styles.display }">
            <font-awesome-icon icon="fa-solid fa-arrow-up" class="icon-rollup" />
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            styles: {
                display: "none"
            }
        }
    },
    methods: {
    },
    mounted() {

        // visible rollup box when rolldown
        window.addEventListener("scroll", e => {
            e.currentTarget.scrollY >= 200 ? this.styles.display = "flex" : this.styles.display = "none"
        })

        // handle click rollup box
        const rollUp = document.querySelector(".rollup-box")
        rollUp.addEventListener("click", function() {
            window.scrollTo(0,0)
        })
    }

}



</script>

<style lang="scss" scoped>
.rollup-box {
    width: 30px;
    height: 30px;
    background-color: #068DDA;
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 15px;
}

.icon-rollup {
    widows: 10px;
    height: 10px;
    color: #FFF;
}

.footer {
    margin-top: 40px;
    width: 100%;
    background-color: #000;
    color: #fff;
    position: relative;

    &-box-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0 32px;
        padding: 40px 0;
    }

    &-box {
        display: flex;
        flex-direction: column;
        color: #fff;
    }

    &-heading {
        line-height: 26px;
        font-size: 18px;
    }

    &-list {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        line-height: 26px;

        .subscribe {
            margin-top: 5px;
        }

        .subscribe-link {
            box-sizing: content-box;
            background-color: #068DDA;
            color: #FFF;
            padding: 10px 20px;
            line-height: 27px;
            margin-top: 50px;
        }
    }

    &-more {
        display: flex;
        gap: 20px;
        justify-content: center;
        padding: 30px 0;

        &-item {
            display: inline-block;
            font-size: 15px;

        }
    }

    &-themeby {
        font-size: 15px;
        text-align: center;
    }

    &-connect {
        display: flex;
        gap: 0 15px;
        justify-content: center;
        padding: 20px 0 32px;

        .icon-wrapper {
            width: 26px;
            height: 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--clr);
            border-radius: 50%;
        }

        .icon {
            width: 15px;
            height: 15px;
        }


    }


}

.wrapper {
    max-width: 1180px;
    margin: 0 auto;
}

@media screen and (max-width: 1180px) {
    .footer {
        padding: 0 40px;

    }

}


@media screen and (max-width: 780px) {
    .footer {
        padding: 0 15px;

        &-box-list {
            display: flex;
            flex-direction: column;
            gap: 40px 0;
        }
    }

}
</style>