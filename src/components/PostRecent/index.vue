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
.post-recent {
  display: flex;
  gap: 15px;

  &-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  &-title {
    display: inline-block;

    &:hover {
      color: #0099e5;
    }
  }

  &-date {
    margin-top: 6px;
    color: #888888;
  }
}
</style>
