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
.post-small {
  width: 100%;

  &-image {
    width: 100%;
    height: auto;
  }

  &-caption {
    margin-top: 10px;
    font-weight: 400;

    &:hover {
      color: #0099E5;
    }
  }
}
</style>