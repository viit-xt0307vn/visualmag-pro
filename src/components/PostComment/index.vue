<script src="./index.js" />
<style lang="scss" scoped src="./index.scss" />

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