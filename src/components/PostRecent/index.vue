<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
  <div class="post-recent">
    <nuxt-link class="post-recent" :to="`/${post?.id}`">
      <img class="post-recent-image" :src="post?.image" alt="" /></nuxt-link>
    <div class="post-recent-content">
      <nuxt-link :to="`/${post?.id}`">
        <p class="post-recent-title">
          {{ post?.name }}
        </p>
      </nuxt-link>
      <p class="post-recent-date">{{ post?.creater?.created }}</p>
    </div>
  </div>
</template>