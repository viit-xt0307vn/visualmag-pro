<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
    <section class="layout-flex-vertical gap24">
        <HeadingSection name="Lifestyle" slug="lifestyle" />
        <div class="layout-grid-quad gap20">
            <PostSmall v-for="(post, index) in posts" :post="post" :key="index" />
        </div>
    </section>
</template>