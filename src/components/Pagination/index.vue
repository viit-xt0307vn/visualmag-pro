<template>
    <nav class="pagination">
        <button class="btn">Previous page</button>
        <ul class="pages">
            <li class="page">1</li>
            <li class="page">2</li>
            <li class="page">3</li>
        </ul>
        <button class="btn">Next page</button>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: space-between;

}

.pages {
    display: flex;
    gap: 20px;
}

.page,
.btn {
    padding: 0px 12px;
    line-height: 36px;
    font-size: 14px;
    background-color: #F0F0F0;
}
</style>