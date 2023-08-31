<script src="./index.js" />
<style lang="scss" scoped src="./index.scss" />

<template>
  <div class="post-large">
    <nuxt-link :to="`/${post?.id}/`"><img :src="post?.image" alt="" class="post-large-image" /></nuxt-link>
    <div class="post-large-metadata">
      <h6 class="post-large-author">{{ post?.creater?.name }}</h6>
      <p class="post-large-date">{{ post?.creater.created }}</p>
    </div>
    <nuxt-link :to="`/${post?.id}/`">
      <h2 class="post-large-title">
        {{ post?.name }}
      </h2>
    </nuxt-link>
    <p class="post-large-desc">
      {{ post?.description }}
    </p>

  </div>
</template>