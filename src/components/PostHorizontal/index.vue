<script src="./index.js" />
<style lang="scss" scoped src="./index.scss" />

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
                <nuxt-link :to="`/author/${post?.author?.username}`" class="post-horizontal-author">{{ post?.author?.name
                }}</nuxt-link>
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