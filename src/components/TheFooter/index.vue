<script src="./index.js" />
<style lang="scss" scoped src="./index.scss" />

<template>
    <footer class="footer">
        <div class="wrapper">
            <!-- list footer -->
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

            <!-- connect social network -->
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

        <!-- icon rollup when rolldown -->
        <div class="rollup-box" :style="{ 'display': styles.display }">
            <font-awesome-icon icon="fa-solid fa-arrow-up" class="icon-rollup" />
        </div>
    </footer>
</template >