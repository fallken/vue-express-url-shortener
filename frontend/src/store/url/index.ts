import { Module } from "vuex";
import { RootState } from "../types";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { UrlState } from "./types";



const state: UrlState = {
    urlList: []
}
export const url: Module<UrlState, RootState> = {
    state,
    getters: {},
    mutations,
    actions: actions
}