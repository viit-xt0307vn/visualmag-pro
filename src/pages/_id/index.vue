<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <main id="main" class="layout-flex-primary">
    <article v-if="postDetail">

      <!-- ads before post -->
      <template v-if="beforePostAds">
        <ads-keeper v-if="beforePostAds.type.id === 2" v-bind:selector="`ads-before-post`"
          v-bind:contentAds="beforePostAds"></ads-keeper>

        <ads-google v-if="beforePostAds.type.id === 1" v-bind:selector="`ads-before-post`"
          v-bind:contentAds="beforePostAds"></ads-google>
      </template>
      <!-- ads before post -->

      <!-- post header -->
      <div class="post-header">
        <Categories :categories="postDetail.categories" />
        <h2 class="post-heading">
          {{ postDetail.name }}
        </h2>
        <p class="post-metadata">Posted by <nuxt-link class="post-author" :to="`/author/${postDetail.creater.username}`">{{ postDetail.creater.name }}</nuxt-link> - <span
            class="post-update">{{ postDetail.creater.created }}</span></p>
      </div>


      <!-- end post header -->

      <!-- entry content -->
      <div class="entry-content">
        <!-- <p v-if="imageUrl">
          <img :src="imageUrl" :alt="postDetail.name">
        </p> -->
        <div>
          <!-- ads before content -->
          <template v-if="beforeContentAds">
            <ads-keeper v-if="beforeContentAds.type.id === 2" v-bind:selector="`ads-before-content`"
              v-bind:contentAds="beforeContentAds"></ads-keeper>

            <ads-google v-if="beforeContentAds.type.id === 1" v-bind:selector="`ads-before-content`"
              v-bind:contentAds="beforeContentAds"></ads-google>
          </template>
          <!-- ads before content -->

          <!-- post content -->
          <template v-for="(html, index) in postBodyArray">
            <!-- ads before paragraph -->
            <template v-if="beforeParagraphAds && index + 1 === beforeParagraphAds.class.number">
              <ads-keeper v-bind:key="`before-${index}`" v-if="beforeParagraphAds.type.id === 2"
                v-bind:selector="`ads-before-content-${index}`" v-bind:contentAds="beforeParagraphAds"></ads-keeper>

              <ads-google v-bind:key="`before-${index}`" v-if="beforeParagraphAds.type.id === 1"
                v-bind:selector="`ads-before-content-${index}`" v-bind:contentAds="beforeParagraphAds"></ads-google>
            </template>

            <template
              v-if="beforeParagraphAds && ((index + 1 - beforeParagraphAds.class.number) % beforeParagraphAds.class.repeat_content_number === 0) && index - beforeParagraphAds.class.number > 0">
              <ads-keeper v-bind:key="`beforứare-${index}`" v-if="beforeParagraphAds.type.id === 2"
                v-bind:selector="`ads-before-content-${index}`" v-bind:contentAds="beforeParagraphAds"></ads-keeper>

              <ads-google v-bind:key="`before-${index}`" v-if="beforeParagraphAds.type.id === 1"
                v-bind:selector="`ads-before-content-${index}`" v-bind:contentAds="beforeParagraphAds"></ads-google>
            </template>
            <!-- ads before paragraph -->

            <p v-html="html" v-bind:key="index" class="post-paragraph"></p>

            <!-- ads after paragraph -->
            <template v-if="afterParagraphAds && index + 1 === afterParagraphAds.class.number">
              <ads-keeper v-bind:key="`after-${index}`" v-if="afterParagraphAds.type.id === 2"
                v-bind:selector="`ads-after-content-${index}`" v-bind:contentAds="afterParagraphAds"></ads-keeper>

              <ads-google v-bind:key="`after-${index}`" v-if="afterParagraphAds.type.id === 1"
                v-bind:selector="`ads-before-content-${index}`" v-bind:contentAds="afterParagraphAds"></ads-google>
            </template>

            <template
              v-if="afterParagraphAds && ((index + 1 - afterParagraphAds.class.number) % afterParagraphAds.class.repeat_content_number === 0) && index - afterParagraphAds.class.number > 0">
              <ads-keeper v-bind:key="`after-${index}`" v-if="afterParagraphAds.type.id === 2"
                v-bind:selector="`ads-after-content-${index}`" v-bind:contentAds="afterParagraphAds"></ads-keeper>

              <ads-google v-bind:key="`after-${index}`" v-if="afterParagraphAds.type.id === 1"
                v-bind:selector="`ads-before-content-${index}`" v-bind:contentAds="afterParagraphAds"></ads-google>
            </template>
            <!-- ads after paragraph -->
          </template>
          <!-- post content -->



          <!-- ads after content -->
          <template v-if="afterContentAds">
            <ads-keeper v-if="afterContentAds.type.id === 2" v-bind:selector="`ads-after-content`"
              v-bind:contentAds="afterContentAds"></ads-keeper>

            <ads-google v-if="afterContentAds.type.id === 1" v-bind:selector="`ads-after-content`"
              v-bind:contentAds="afterContentAds"></ads-google>
          </template>
          <!-- ads after content -->
        </div>
      </div>
      <!-- entry content -->

      <!-- ads after post -->
      <template v-if="afterPostAds">
        <ads-keeper v-if="beforePostAds.type.id === 2" v-bind:selector="`ads-after-post`"
          v-bind:contentAds="beforePostAds"></ads-keeper>

        <ads-google v-if="beforePostAds.type.id === 1" v-bind:selector="`ads-after-post`"
          v-bind:contentAds="beforePostAds"></ads-google>
      </template>
      <!-- ads after post -->
    </article>
    <div class="error" v-if="status !== 1">
      <h1 class="error-title">404 Error – Page Not Found</h1>
      <p class="error-desc">Sorry, the page you are looking for is not available. Maybe you want to perform a
        search?
      </p>
      <div class="search">
        <input type="text" class="search-input" v-model="inputSearch">
        <button class="search-button"><nuxt-link class="search-text" :to="`/search?keywords=${inputSearch}`">Search</nuxt-link></button>
      </div>

      <h6 class="sugguest-title">For best search results, mind the following suggestions:</h6>
      <div>
        <ul class="sugguest-list">
          <li>Always double check your spelling.</li>
          <li>Try similar keywords, for example: tablet instead of laptop.</li>
          <li>Always double check your spelling.</li>
        </ul>
      </div>
    </div>
  </main>
</template>