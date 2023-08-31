<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <div v-if="author" class="layout-flex-primary">
    <!-- header -->
    <h2 class="section-heading">{{ author.user.name }}</h2>
    <!-- end header -->
    
    <!-- ads -->
    <template v-if="adsCategory">
      <ads-keeper v-if="adsCategory.type.id === 2" v-bind:selector="`ads-category`"
        v-bind:contentAds="adsCategory"></ads-keeper>
      <ads-google v-if="adsCategory.type.id === 1" v-bind:selector="`ads-category`"
        v-bind:contentAds="adsCategory"></ads-google>
    </template>
    <!-- end ads -->

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