<script src="./index.js" />
<style lang="scss" src="./index.scss" />

<template>
  <div class="post-medium">
    <nuxt-link :to="title"><img class="post-medium-image" :src="urlImage" alt="" /></nuxt-link>
    <nuxt-link :to="title">
      <h2 class="post-medium-title">
        {{ title }}
      </h2>
    </nuxt-link>
    <p v-if="card" class="card">SEO</p>

  </div>
</template>