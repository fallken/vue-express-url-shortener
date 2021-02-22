import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { url } from "./url/index";
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    url
  }
}

export default new Vuex.Store<RootState>(store);
