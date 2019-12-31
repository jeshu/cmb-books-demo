<template>
    <div class="book">
        <div class="book-image">
            <img :src="path" :alt="title"/>
        </div>
        <div class="book-actions">
            <button class="launch">Launch</button>
            <button class="overview">Overview</button>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BookItem extends Vue {
    @Prop() path!:String

    @Prop() title!:String
}
</script>

<style lang="scss" scoped>
.book {
    .book-image {
        width: 210px;
        height: 269px;
        border: 1px solid #c5c5c5;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;

        img {
            width: 100%;
            object-fit: cover;
            height: 269px;
            border-radius: 2px;
        }
    }

    .book-actions {
        margin-top: 12px;
        button {
            &.launch {
                background: #015b70;
                padding: 6px 12px;
                border: 1px solid #015b70;
                color: #fff;
                font-size: 13px;
                border-radius: 2px;
                margin-right: 11px;
                cursor: pointer;
            }
            &.overview {
                background: transparent;
                border: 1px solid #c5c5c5;
                padding: 6px 12px;
                font-size: 13px;
                border-radius: 2px;
                color: #015b70;
                cursor: pointer;
            }
        }
    }

}
</style>
