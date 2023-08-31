<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
    <section class="layout-flex-vertical gap24">
        <HeadingSection name="Nail" slug="nail" />
        <div class="layout-flex-horizontal gap24">
            <PostSmall :post="post" v-for="(post, index) in posts" :key="index" />
        </div>
    </section>
</template>
