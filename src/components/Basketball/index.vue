<template>
    <section class="layout-flex-vertical gap24">
        <HeadingSection nameHeading="Nail" />
        <div class="layout-flex-horizontal gap24">
            <PostSmall
                urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/hands-table-400x266.jpeg"
                title="SEO is Turning into a Questions and Answers Game" />
            <PostSmall
                urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/hands-table-400x266.jpeg"
                title="SEO is Turning into a Questions and Answers Game" />
            <PostSmall
                urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/hands-table-400x266.jpeg"
                title="SEO is Turning into a Questions and Answers Game" />
        </div>
    </section>
</template>

<script>
import HeadingSection from "@/components/HeadingSection";
import PostSmall from "@/components/PostSmall";
export default {
    components: {
        PostSmall,
        HeadingSection
    }
}
</script>

<style lang="scss" scoped></style>