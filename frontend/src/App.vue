<template>
  <div id="app">
    <AddUrl />
    <UrlList />
  </div>
</template>

<style src="@/assets/styles/urlshortener.css"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UrlList from "./components/UrlList.vue";
import AddUrl from "./components/AddUrl.vue";

@Component({
  components: {
    UrlList,
    AddUrl,
  },
})
export default class App extends Vue {}
</script>
