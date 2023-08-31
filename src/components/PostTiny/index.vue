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

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss">
.post {
  &-tiny {
    display: flex;
    gap: 15px;

    &-image {
      width: 120px;
      height: 80px;
    }

    &-title {
      display: inline-block;
      display: -webkit-box;
      max-width: 200px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

    }

    &-date {
      margin-top: 6px;
      color: #888888;
    }
  }

}
</style>