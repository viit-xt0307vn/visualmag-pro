<script src="./index.js"/>
<style src="./index.scss" lang="scss" scoped />

<template>
    <div class="layout-flex-vertical gap32">
        <!-- follow us -->
        <section class="layout-flex-vertical gap32">
            <HeadingSection name="Follow us" slug="" />
            <div class="followus-container">
                <IconsConnect />
            </div>
        </section>
        <!-- end follow us -->

        <!-- most commented -->
        <section class="layout-flex-vertical gap32">
            <HeadingSection name="Most commented posts" slug="" />

            <div class="layout-flex-vertical gap24">
                <PostRecent v-for="(post, index) in randomPosts" :post="post" :key="index" />
            </div>
        </section>
        <!-- end most commented -->

        <!-- tags -->
        <section class="tags">
            <HeadingSection name="Tags" slug="" />
            <div class="tags-container">
                <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" />
            </div>
        </section>
        <!-- end tags -->
    </div>
</template>