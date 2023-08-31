<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
    <section class="layout-flex-vertical gap24">
        <HeadingSection name="Football" slug="football" />
        <div class="layout-grid-double gap32">
            <template v-for="(post, index) in posts">
                <PostLarge :post="post" v-if="index === 0" />
            </template>
            <div class="layout-flex-vertical gap24">
                <template v-for="(post, index) in posts">
                    <PostTiny :post="post" v-if="index !== 0" />
                </template>
            </div>

        </div>
    </section>
</template>