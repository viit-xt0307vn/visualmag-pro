<template>
    <div class="post-horizontal">
        <nuxt-link :to="`/${post?.id}`"><img class="post-horizontal-image" :src="post?.image" alt="" /></nuxt-link>
        <div class="post-horizontal-content">
            <nuxt-link :to="`/${post?.id}`">
                <h2 class="post-horizontal-title">
                    {{ post?.name }}
                </h2>
            </nuxt-link>
            <div class="post-horizontal-metadata">
                <nuxt-link :to="`/author/${post?.author?.username}`" class="post-horizontal-author">{{ post?.author?.name }}</nuxt-link>
                <p class="post-horizontal-date">
                    {{ post?.created }}
                </p>
            </div>
            <p class="post-horizontal-desc">
                {{ post?.description }}
            </p>
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

<style lang="scss" scoped>
.post-horizontal {
    width: 100%;
    display: flex;
    gap: 23px;

    &-image {
        width: 240px;
        height: 160px;
        object-fit: cover;

    }

    &-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &-metadata {
        display: flex;
        gap: 15px;
    }

    &-desc {
        display: -webkit-box;
        width: 100%;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: #888888;
        line-height: 22px;
    }

    &-title {
        font-size: 1.5rem;

        &:hover {
            color: #0099E5;
        }
    }
    &-author {
        font-weight: bold;
    }
}
</style>