<script src="./index.js" />
<style lang="scss" scoped src="./index.scss" />

<template>
    <nuxt-link :to="`/tag/${tag?.slug}`">
        <p class="tag">{{ tag?.name }}</p>
    </nuxt-link>
</template>