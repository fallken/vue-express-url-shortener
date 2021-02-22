import { MutationTree } from "vuex";
import { UrlState } from "./types";


export enum UrlMutations {
    SET_URL_LIST = "SET_URL_LIST",
}

export const mutations: MutationTree<UrlState> = {
    [UrlMutations.SET_URL_LIST](state, payload: []) {
        state.urlList = payload
    }
}