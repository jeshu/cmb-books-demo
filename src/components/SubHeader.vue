<template>
    <div class="subHeader">
        <div class="title-nav">
            <span class="title">{{pgTitle}}</span>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/samples">Samples</router-link> |
                <router-link to="/digitaldownload">Digital Downloads</router-link>
            </nav>
        </div>
        <div class="auth-buttons">
            <router-link to="/login" class="login">Login</router-link>
            <router-link to="/signup" class="signup">Sign Up</router-link>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SubHeader extends Vue {
    @Prop() pgTitle!:String
}
</script>

<style lang="scss" scoped>
.subHeader {
    background-color: #FDFDFD;
    border-bottom: 3px solid #FFd500;
    height: 76px;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 10px 0px 20px;

    a {
        text-decoration: none;
        padding: 0 10px;
        display: inline-block;
        height: 30px;
        margin: 0 10px;
        line-height: 30px;
        text-transform: uppercase;

    }
    .title-nav {
        .title {
            font-size: 24px;
        }
        nav {
            margin-left: 30px;
            display: inline-block;
            a {
                color: #333333;
                &.router-link-exact-active {
                    color:#990000;
                    background-color: #FFd500;
                }
            }
        }
    }
    .auth-buttons {
        a {
            border: 1px solid #ccF000;
        }
    }
}
</style>
