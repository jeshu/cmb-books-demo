<template>
  <div class="header">
    <router-link to="/"><h2>
      <span class="highlighted">CMB</span>
      {{siteName}}
        <div class="description">{{siteDesc}}</div>
    </h2></router-link>
    <div id="nav">
      <router-link to="/about">About Us</router-link>
      <router-link  disable to="/help" class="isDisabled">Need Help</router-link>
      <router-link to="/contactus">Contact Us</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
  @Prop() private siteName!: String;

  @Prop() private siteDesc!: String;
}
</script>

<style lang="scss" scoped>
.header {
    text-align: left;
    width: 100%;
    height: 50px;
    background-color: #333;
    color: #fdfdfd;
    overflow: hidden;

    h2 {
        margin: 5px 20px;
        float: left;
        color: #fdfdfd;
        .highlighted{
            color: #ffd500;
        }
        .description {
            color: #666666;
            font-size: 12px;
        }
    }
    #nav {
    float: right;
    margin-top: 5px;
    a {
        font-size: 12px;
        padding: 0px 20px 0 10px;
        text-decoration: none;
        color: #FFF;

        &.router-link-exact-active {
            color: #ffd500;
            }
        }
    }
}
</style>
