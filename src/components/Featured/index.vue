<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
    <section class="featured">
        <FeaturedItem v-for="(post, index) in posts" :key="index" :post="post" />
    </section>
</template>