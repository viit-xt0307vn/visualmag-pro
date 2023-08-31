<script src="./index.js" />
<style lang="scss" scoped src="./index.scss" />

<template>
    <div class="category">
        <nuxt-link :to="`/`"><p class="category-name">{{ category?.name }}</p></nuxt-link>
        <p class="category-number">{{ category?.name }}</p>
    </div>
</template>