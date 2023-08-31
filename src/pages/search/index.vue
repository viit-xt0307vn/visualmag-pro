<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <div class="layout-flex-vertical gap32">
    <!-- header -->
    <h2 class="search-title">Search results for: "{{ $route.query.keywords }}" </h2>
    <!-- end header -->
    
    <!-- ads search -->
    <template v-if="adsSearch">
      <ads-keeper v-if="adsSearch.type.id === 2" v-bind:selector="`ads-search`"
        v-bind:contentAds="adsSearch"></ads-keeper>
      <ads-google v-if="adsSearch.type.id === 1" v-bind:selector="`ads-search`"
        v-bind:contentAds="adsSearch"></ads-google>
    </template>
    <!-- end ads search -->
  </div>
</template>

<style scoped>
.search-title {
  font-size: 27px;
}
</style>