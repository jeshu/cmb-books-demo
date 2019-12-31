<template>
  <div id="app">
    <AppHeader siteName="Book Portal" siteDesc="Portal for publishers..." />
    <SubHeader pgTitle="MyDigital"/>
    <router-view class="fillHeight"/>
    <Footer copyright="Copyright © CMB Education Divison Pvt Ltd 2019-2020" />
  </div>
</template>

<script lang="ts">

import AppHeader from './components/AppHeader.vue';
import SubHeader from './components/SubHeader.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SubHeader,
    Footer,
  },
};

</script>
<style lang="scss">
* {
  margin: 0px;
  padding:0px;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  font-size: 12px;
  width: 80%;
  margin: auto;
}
.fillHeight {
  min-height: calc(100vh - 168px);
}
.isDisabled{
  pointer-events: none;
  opacity: 0.6;
}
</style>
