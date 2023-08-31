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

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.post-large {
  &-image {
    width: 100%;
  }

  &-metadata {
    display: flex;
    gap: 15px;
    margin-top: 16px;
  }

  &-title {
    margin-top: 10px;
    font-size: 21.6px;

    &:hover {
      color: #0099E5;
    }
  }

  &-desc {
    display: -webkit-box;
    width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #888888;
    margin-top: 10px;
    line-height: 22px;
  }

}
</style>