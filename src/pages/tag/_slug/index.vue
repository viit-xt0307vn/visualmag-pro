<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <div v-if="tag" class="layout-flex-primary">
    <h2 class="section-heading">{{ tag.name }}</h2>

    <!-- ads category -->
    <template v-if="adsCategory">
      <ads-keeper v-if="adsCategory.type.id === 2" v-bind:selector="`ads-category`"
        v-bind:contentAds="adsCategory"></ads-keeper>

      <ads-google v-if="adsCategory.type.id === 1" v-bind:selector="`ads-category`"
        v-bind:contentAds="adsCategory"></ads-google>
    </template>
    <!-- ads category -->

    <template v-if="adsTag">
      <ads-keeper v-if="adsTag.type.id === 2" v-bind:selector="`ads-tag`" v-bind:contentAds="adsTag"></ads-keeper>
      <ads-google v-if="adsTag.type.id === 1" v-bind:selector="`ads-tag`" v-bind:contentAds="adsTag"></ads-google>
    </template>

    <!-- post list -->
    <ul class="post-list">
      <li class="post-item" v-for="(post, index) in posts">
        <PostHorizontal :post="post" :key="index" />
      </li>
      <div class="load-more" id="infinite-list"></div>
      <loading :active="isLoading"></loading>
    </ul>
    <!-- end post list -->
  </div>
</template>