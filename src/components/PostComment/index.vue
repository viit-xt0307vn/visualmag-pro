<template>
    <form class="form">
        <h2 class="form-title">Leave a Reply</h2>
        <p class="form-desc">Your email address will not be published. Required fields are marked *</p>
        <div class="form-boxlist">
            <div class="form-box">
                <label class="form-heading">Comment*</label>
                <textarea type="text" class="form-input" />
            </div>
            <div class="form-box">
                <label class="form-heading">Name*</label>
                <input type="text" class="form-input" />
            </div>
            <div class="form-box">
                <label class="form-heading">Email*</label>
                <input type="text" class="form-input" />
            </div>

            <div class="form-save">
                <input type="checkbox" class="form-input" />
                <label class="form-heading">Save my name, email, and website in this browser for the next time I
                    comment.</label>
            </div>

            <div class="form-submitbox">
                <input type="submit" value="Post comment" class="form-submit" />
            </div>

        </div>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.form {
    margin-top: 32px;
    &-title {
        font-size: 18px;
        margin-bottom: 20px
    }

    &-desc {
        margin-bottom: 23px
    }

    &-boxlist {
        display: flex;
        flex-direction: column;
        gap: 16px 0;

    }

    &-box {
        display: flex;
        flex-direction: column;
    }

    &-heading {
        line-height: 26px;
    }

    &-input {
        padding: 13px;
        border: 1px solid #e9e9e9;
        outline: none;

        &:focus {
            border-color: #0099E5;
            color: #0099E5;
        }
    }

    &-save {
        display: flex;
        gap: 0 7px;
    }

    &-submitbox {
        display: inline;
    }
    &-submit {
        padding: 10px 30px;
        background-color: #0099E5;
        display: inline;
        color: #FFF;
    }
}

textarea {
    height: 120px;
}
</style>