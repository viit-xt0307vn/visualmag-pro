<template>
    <header class="header">
        <nav class="navigation">
            <nuxt-link to="/"><img class="logo" :src="settings.setting.logo" alt="" /></nuxt-link>
            <ul class="menu">
                <li class="menu-item" v-for="(menu, index) in primaryMenus">
                    <NuxtLink class="menu-link" :to="menu.url">{{ menu.name }}</NuxtLink>
                </li>
            </ul>

            <!-- search -->
            <div class="search">
                <input type="text" class="search-input" v-model="searchInput"/>
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

<script >
import { mapState, mapGetters } from 'vuex'
import * as TYPES from '@/consts'

export default {
    /* --------------------------------------------------
      components
    -------------------------------------------------- */
    components: {},

    /* --------------------------------------------------
      data
    -------------------------------------------------- */
    data() {
        return {
            searchModel: null,
            isOpenMenu: false,
            searchInput: ''
        }
    },

    /* --------------------------------------------------
      computed
    -------------------------------------------------- */
    computed: {
        ...mapState({
            /**
             * primaryMenus
             * @returns {Array}
             */
            primaryMenus() {
                return this.$store.state.common.storeLoadInit.menus.filter(e => e.type.name === 'Main Menu')
            },

            /**
             * menu
             * @returns {Boolean}
             */
            menu() {
                return this.$store.state.storeMenuSP.menu
            },

            settings() {
                return this.$store.state.common.storeLoadInit.settings
            },
        }),
    },

    /* --------------------------------------------------
      methods
    -------------------------------------------------- */
    methods: {
        /**
         * Search
         */
        search() {
            this.$router.push({
                name: 'search',
                query: {
                    keywords: this.searchModel
                }
            })
        },

        /**
         * openMenu SP
         */
        openMenu() {
            this.$store.commit(`storeMenuSP/${TYPES.TOOGLE_MENU}`, true)
        },

        // function click menu
        handleClickMenu() {
            this.isOpenMenu = true
        },


        // function close menu
        handleClickCloseMenu() {
            this.isOpenMenu = false
        }
    },
    mounted() {
        const openMenu = document.querySelector(".menu-icon")
        const closeMenu = document.querySelector(".menu-close")

        openMenu.addEventListener("click", () => this.handleClickMenu())
        closeMenu.addEventListener("click", () => this.handleClickCloseMenu())
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 76px;
    width: 100%;
    box-shadow: 0 0 15px #00000030;
}

.navigation-secondary {
    width: 100%;
    height: 200vh;
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
    background-color: #FFF;
    display: none;
    justify-content: space-between;
    padding: 30px;

    .menu-secondary {
        display: flex;
        flex-direction: column;
        gap: 20px 0;
    }


    .menu-close {
        display: flex;
        width: 36px;
        height: 36px;
        align-items: center;
        justify-content: center;

        .icon-xmark {
            display: block;
            width: 20px;
            height: 20px;
            color: #000;
        }
    }
}

.navigation {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100%;
}

.logo {
    display: inline-block;
    width: 220px;
    height: 76px;
    object-fit: cover;
    filter: brightness(100%, 100%);
}

.menu {
    margin-right: 32px;
    margin-left: auto;
    display: flex;
    gap: 0 24px;
}

.search {
    width: 200px;
    height: 36px;
    display: flex;

    &-input {
        padding: 5px;
        height: 36px;
        width: calc(100% - 36px);
        background-color: #f0f0f0;
    }

    &-button {
        background-color: #0099e5;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 36px;

        .icon-glass {
            font-size: 16px;
            width: 16px;
            height: 16px;
            color: #fff;
            transform: scaleX(-1);
        }
    }


}

.menu-icon {
    width: 36px;
    height: 36px;
    display: none;
    align-items: center;
    justify-content: center;
    border: 1px solid #e9e9e9;
}

.icon-bars {
    font-size: 16px;
    width: 18px;
    height: 18px;
    color: #222222;
}

.open-menu {
    display: flex;
}

.close-menu {
    display: flex;
}


@media screen and (max-width: 1180px) {
    .search {
        display: none;
    }

    .header {
        padding: 0 15px;
    }

    .menu {
        margin-right: 0;
    }
}


@media screen and (max-width: 960px) {


    .navigation {
        display: flex;
        justify-content: space-between;

    }


    .menu {
        display: none;
    }



    .menu-icon {
        display: flex;
    }
}
</style>