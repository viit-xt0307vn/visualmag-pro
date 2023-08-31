<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
    <main class="main">

        <!-- Featured -->
        <Featured />

        <div class="layout-grid-triple gap32">
            <main class="layout-flex-primary gap32">

                <!-- Football -->
                <Football />

                <!-- Basketball -->
                <Nail />
                <div class="layout-grid-double gap32">

                    <!-- Car -->
                    <Car />

                    <!-- Fashion -->
                    <Fashion />
                </div>
            </main>

            <!-- Sidebar -->
            <aside class="layout-flex-secondary gap32">

                <!-- Follow us -->
                <section class="followus">
                    <HeadingSection nameHeading="Follow us" />
                    <IconsConnect />
                </section>

                <!-- Baby -->
                <Baby />

                <!-- Tattoo -->
                <Tattoo />

                <!-- Lifestyle -->
                <Lifestyle />

            </aside>
        </div>

    </main>
</template>
