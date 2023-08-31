<template>
    <div class="icons">
        <div class="icon-box">
            <div>
                <font-awesome-icon icon="fa-brands fa-twitter" class="icon" style="--icon-clr: #1da1f2" />
            </div>
            <p class="followus-name">Twitter</p>
        </div>
        <div class="icon-box">
            <div>
                <font-awesome-icon icon="fa-brands fa-facebook" class="icon" style="--icon-clr: #1778f2" />
            </div>
            <p class="followus-name">Facebook</p>
        </div>
        <div class="icon-box">
            <div>
                <font-awesome-icon icon="fa-brands fa-instagram" class="icon" style="--icon-clr: #f33f97" />
            </div>
            <p class="followus-name">Instagram</p>
        </div>
        <div class="icon-box">
            <div>
                <font-awesome-icon icon="fa-brands fa-youtube" class="icon" style="--icon-clr: #fa0000" />
            </div>
            <p class="followus-name">YouTube</p>
        </div>
        <div class="icon-box">
            <div>
                <font-awesome-icon icon="fa-brands fa-dribbble" class="icon" style="--icon-clr: #e64b87" />
            </div>
            <p class="followus-name">Dribbble</p>
        </div>
        <div class="icon-box">
            <div>
                <font-awesome-icon icon="fa-brands fa-linkedin" class="icon" style="--icon-clr: #0d66c2" />
            </div>
            <p class="followus-name">LinkedIn</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.icons {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 9px;
}

.icon-box {
    display: flex;
    height: 33px;
    gap: 10px;
    align-items: center;
}

.icon-box:hover {
    transform: scale(1.1);
    transition: all 0.1s linear;
}

.icon {
    color: var(--icon-clr);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
}

.followus-name {
    cursor: pointer;
}
</style>