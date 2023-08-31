<script src="./index.js" />
<style lang="scss" scoped src="./index.scss"/>

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