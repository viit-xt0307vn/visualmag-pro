<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <!-- <div v-if="tag">
    <div class="breadcrumbs clear">
      <span class="breadcrumbs-nav">
        <router-link :to="`/`">Home</router-link>
        <span class="post-category">{{ tag.name }}</span>
      </span>
      <h1>{{ tag.name }}</h1>
    </div>

    <main id="main" class="site-main clear">
      <div id="recent-content" class="content-loop">
     
        <template v-if="adsTag">
          <ads-keeper
            v-if="adsTag.type.id === 2"
            v-bind:selector="`ads-tag`"
            v-bind:contentAds="adsTag"
          ></ads-keeper>

          <ads-google
            v-if="adsTag.type.id === 1"
            v-bind:selector="`ads-tag`"
            v-bind:contentAds="adsTag"
          ></ads-google>
        </template>
        <post-item-list
          v-for="(post, index) in posts" 
          v-bind:key="index"
          v-bind:item="post"
          v-bind:category="tag">
        </post-item-list>
      </div>
      <div class="load-more" id="infinite-list"></div>
      <loading :active="isLoading"></loading>
    </main>
  </div> -->
  <div v-if="tag" class="layout-flex-primary">
    <h2 class="section-heading">{{ tag.name }}</h2>
    <template v-if="adsCategory">
      <ads-keeper v-if="adsCategory.type.id === 2" v-bind:selector="`ads-category`"
        v-bind:contentAds="adsCategory"></ads-keeper>

      <ads-google v-if="adsCategory.type.id === 1" v-bind:selector="`ads-category`"
        v-bind:contentAds="adsCategory"></ads-google>
    </template>
    <ul class="post-list">
      <li class="post-item" v-for="(post, index) in posts">
        <PostHorizontal :post="post" :key="index" />
      </li>
      <div class="load-more" id="infinite-list"></div>
      <loading :active="isLoading"></loading>
    </ul>
  </div>
</template>