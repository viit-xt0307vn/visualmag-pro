<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

<template>
    <header class="header">

        <!-- navigation primary -->
        <nav class="navigation">
            <nuxt-link to="/"><img class="logo" :src="settings.setting.logo" alt="" /></nuxt-link>
            <ul class="menu">
                <li class="menu-item" v-for="(menu, index) in primaryMenus">
                    <NuxtLink class="menu-link" :to="menu.url">{{ menu.name }}</NuxtLink>
                </li>
            </ul>

            <!-- search -->
            <div class="search">
                <input type="text" class="search-input" v-model="searchInput" />
                <button class="search-button">
                    <nuxt-link :to="`/search?keywords=${searchInput}`">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon-glass" />
                    </nuxt-link>
                </button>
            </div>
            <!-- end search -->

            <!-- icon menu -->
            <div class="menu-icon">
                <font-awesome-icon icon="fa-solid fa-bars" class="icon-bars" />
            </div>
            <!-- end icon menu -->
        </nav>
        <!-- end navigation primary -->

        <!-- navigation secondary -->
        <nav class="navigation-secondary" :style="{ display: isOpenMenu ? 'flex' : 'none' }">
            <ul class="menu-secondary">
                <li class="menu-item" v-for="(menu, index) in primaryMenus">
                    <NuxtLink class="menu-link" :to="menu.url">{{ menu.name }}</NuxtLink>
                </li>
            </ul>

            <div class="menu-close">
                <font-awesome-icon icon="fa-solid fa-xmark" class="icon-xmark" />
            </div>
        </nav>
        <!-- end navigation secondary -->
    </header>
</template>