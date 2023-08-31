<script src="./index.js" />
<style lang="scss" scoped src="./index.scss" />

<template>
    <div class="categories-card">
        <CategoryCard v-for="(category, index) in categories" :category="category" :key="index" />
    </div>
</template>