<template>
    <div class="error">
        <h1 class="error-title">404 Error – Page Not Found</h1>
        <p class="error-desc">Sorry, the page you are looking for is not available. Maybe you want to perform a
            search?
        </p>
        <div class="search">
            <input type="text" class="search-input">
            <button class="search-button">Search</button>
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
</template>

<script>
export default {
    layout: "MainLayout/index"
}
</script>

<style lang="scss" scoped>
.error {
    display: flex;
    flex-direction: column;
    gap: 32px 0;

    &-title {
        font-size: 35px;
        line-height: 43px;
    }

    &-desc {
        line-height: 26px;
    }
}

.search {
    width: 100%;
    height: 43px;
    display: flex;

    &-input {
        display: inline-block;
        background-color: #f0f0f0;
        color: #333333;
        font-family: "Inter";
        font-size: 14px;
        line-height: 24.5px;
        padding: 5px 0px 5px 10px;
        height: 100%;
        font-weight: 600;
    }

    &-button {
        width: 113px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0099e5;
        color: #ffffff;
    }
}

.sugguest {
    &-title {
        font-size: 16px;
    }

    &-list {
        li {
            list-style-type: disc;
            list-style-position: inside;
            line-height: 26px;
            color: #222222;
        }
    }
}
</style>