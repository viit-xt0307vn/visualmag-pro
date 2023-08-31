<script src="./index.js" />
<style lang="scss" scoped src="./index.scss" />

<template>
    <div class="wrapper">

        <TheHeader />

        <div class="layout-grid-triple gap32 layout-primary mt32">
            <main class="layout-flex-primary">
                <nuxt />
            </main>

            <!-- Sidebar -->
            <aside class="aside">
                <TheSidebar />
            </aside>
        </div>

        <TheFooter />
    </div>
</template>