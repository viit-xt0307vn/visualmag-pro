<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
    <div class="featured-item">
        <nuxt-link :to="`/${post.id}/`"><img class="featured-image" :src="post?.image" alt="" />
            <div class="featured-content">
                <div class="card">
                    <a href="" class="cart-name">{{ post?.categories[0]?.name }}</a>
                </div>
                <h2 class="featured-title">
                    {{ post?.name }}
                </h2>
            </div>
        </nuxt-link>
    </div>
</template>