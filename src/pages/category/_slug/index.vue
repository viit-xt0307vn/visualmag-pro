<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <div v-if="category" class="layout-flex-primary">
    <!-- header -->
    <h2 class="section-heading">{{ category?.name }}</h2>
    <p class="caption">{{  category?.description }}</p>
    <!-- end header -->
    
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