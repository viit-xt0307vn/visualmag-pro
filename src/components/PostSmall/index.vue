<script src="./index.js" />
<style lang="scss" scoped src="./index.scss" />

<template>
  <div class="post-small">
    <nuxt-link :to="`/${post?.id}/`"><img class="post-small-image" :src="post?.image" alt="" /> </nuxt-link>
    <nuxt-link :to="`/${post?.id}/`">
      <p class="post-small-caption heading-blogging">
        {{ post?.name }}
      </p>
    </nuxt-link>

  </div>
</template>