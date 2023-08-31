<template>
    <div class="wrapper">
        <!-- Header -->
        <TheHeader />
        
        <!-- Main -->
        <nuxt />

        <TheFooter />
        <!-- Footer -->
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
    export default {
        components: {
            TheHeader: TheHeader,
            TheFooter: TheFooter,
        }
    }
</script>

<style lang="scss" scoped>

.wrapper {
    width: 100%;
}
.container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 20px;

    .main {
        grid-column: 1/3;
    }
}

@media screen and (max-width: 1180px) {
    .main {
        padding: 0 15px;
    }
}
</style>