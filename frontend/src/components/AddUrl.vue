<template>
  <div class="addurl-container">
    <div class="addurl-form">
      <div class="addurl-form-loading" v-if="showLoading">
        <span>
          please wait ...
        </span>
      </div>
      <div class="addurl-form_input-container">
        <input
          v-model="urlString"
          @keyup.enter="addurl"
          class="addurl-input"
          type="text"
        />
        <button class="addurl-button" @click.prevent="addurl">
          Add Url
        </button>
      </div>
      <div class="addurl-errors">
        <span :key="index" v-for="(errobj, index) in errors">
          - {{ errobj.msg }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "axios"; //
import { UrlActions } from "../store/url/actions";
import config from "@/config/config";

@Component
export default class HelloWorld extends Vue {
  private urlString = "";
  private showLoading = false;
  private errors: Array<object> = [];

  public async addurl(): Promise<void> {
    if (!this.urlString || !this.urlString.length) {
      this.errors.push({
        msg: "url should not be empty",
      });
      return;
    }
    this.showLoading = true;
    await axios
      .post(config.baseUrl, {
        url: this.urlString,
      })
      .then((result) => {
        this.showLoading = false;
        this.urlString = "";
        this.$store.dispatch(UrlActions.GET_URL_LIST);
      })
      .catch((e: any) => {
        this.showLoading = false;
        if (e.response && e.response.data)
          this.errors.push(...e.response.data.meta.detail.errors);
      });
  }

  @Watch("errors")
  errorsChanged(data: string[]) {
    if (data.length > 0)
      setTimeout(() => {
        this.errors = [];
      }, 5000);
  }
  mounted() {
    console.log("ready");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
