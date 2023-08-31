<script src="./index.js"/>
<style lang="scss" src="./index.scss" />

<template>
  <div class="post-tiny">
    <nuxt-link :to="`/${post?.id}/`" class="post-tiny">
      <img class="post-tiny-image" :src="post?.image" alt="" /></nuxt-link>
    <div class="post-tiny-content">
      <nuxt-link :to="`/${post?.id}/`">
        <h2 class="post-tiny-title">
          {{ post?.name }}
        </h2>
      </nuxt-link>
      <p class="post-tiny-date">{{ post?.creater?.created }}</p>
    </div>

  </div>
</template>