import { ActionTree } from "vuex";
import { RootState } from "../types";
import { UrlMutations } from "./mutations";
import { UrlState } from "./types";
import config from "@/config/config";
// import axios from "@/services/http"; //
import axios from "axios"; //


export enum UrlActions {
    GET_URL_LIST = "GET_URL_LIST"
}

export const actions: ActionTree<UrlState, RootState> = {
    async [UrlActions.GET_URL_LIST]({ commit }): Promise<any> {
        await axios.get(config.baseUrl).then((res) => {
            commit(UrlMutations.SET_URL_LIST, res.data.data.items)
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
    }
}