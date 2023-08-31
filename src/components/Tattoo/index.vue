<script src="./index.js" />
<style lang="scss" scoped src="./styles.scss"/>

<template>
    <section class="layout-flex-vertical gap24">
        <HeadingSection name="Tattoo" slug="tattoo" />
        <div class="layout-flex-vertical gap24">
            <PostTiny v-for="(post, index) in posts" :post="post" :key="index" />
        </div>
    </section>
</template>