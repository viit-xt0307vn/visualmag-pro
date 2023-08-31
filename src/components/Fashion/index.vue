<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
    <section class="layout-flex-vertical gap24">
        <HeadingSection name="Fashion" slug="fashion" />
        <div class="layout-flex-vertical gap24">
            <template v-for="(post, index) in posts">
                <PostLarge :post="post" v-if="index === 0" />
                <PostTiny :post="post" v-if="index !== 0" />
            </template>
        </div>
    </section>
</template>