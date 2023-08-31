<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
  <h2 class="heading-section-box">
    <nuxt-link class="heading-section" :to="`/category/${slug}`">{{ name }}</nuxt-link>
  </h2>
</template>