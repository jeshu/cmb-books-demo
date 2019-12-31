<template>
    <div class="footer">
        <nav class="footer-link">
            <router-link to="/about">About Us</router-link>
            <router-link to="/contactus">Contact Us</router-link>
            <router-link to="/terms">Terms &amp; Conditions</router-link>
            <router-link to="/privacy">Privacy Policy</router-link>
        </nav>
        <div class="copyright">{{copyright}}</div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
    @Prop() copyright!:String
}
</script>

<style lang="scss" scoped>
.footer {
    line-height: 20px;
    background-color: #FDFDFD;
    border-top:solid 1px #666666;
    margin-top: 10px;
    .footer-link {
        float: left;

        a {
            color:#333333;
            text-decoration: none;
            padding: 10px;
        }
        a.router-link-exact-active {
            color:#999999;
        }
    }

    .copyright {
        margin-right: 10px;
        float: right;
    }
}
</style>
