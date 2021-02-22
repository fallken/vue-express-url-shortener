<template>
  <div>
    <div class="url_container">
      <ul>
        <li :key="index" v-for="(url, index) in urlItems">
          <span> address : </span>
          <br />
          <a :href="url.mainUrl">
            {{ url.mainUrl }}
          </a>
          <br />
          <br />
          <span> short url: </span>
          <br />
          <a :href="url.finalUrl" target="_blank" :title="url.mainUrl">
            {{ url.finalUrl }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { UrlActions } from "../store/url/actions";

@Component
export default class HelloWorld extends Vue {
  get urlItems(): Array<object> {
    return this.$store.state.url.urlList;
  }
  mounted() {
    this.$store.dispatch(UrlActions.GET_URL_LIST);
  }
}
</script>
