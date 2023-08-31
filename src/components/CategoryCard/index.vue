<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
    <nuxt-link :to="`/category/${category?.slug}/`" class="category-cart"><p >{{ category?.name }}</p></nuxt-link>
</template>