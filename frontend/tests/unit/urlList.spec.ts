import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import createStoreConfig from "../mocks/storeConfig";
import { urlList as mockUrlList } from "../mocks/urlList";
import UrlList from "@/components/UrlList.vue";
import axios from "axios"; //

jest.mock("axios", () => ({
    get: jest.fn(() => Promise.resolve({
        data: {
            data: {
                items: mockUrlList
            }
        }
    })),
}));

let localVue = createLocalVue()
let store: any;


beforeEach(() => {
    localVue.use(Vuex);
    const storeConfig = createStoreConfig();
    store = new Vuex.Store(storeConfig);
});

describe("testing list of loaded urls in the page", () => {

    it("testing store data and mutations", async (done) => {
        await store.commit("SET_URL_LIST", mockUrlList);
        const wrapper = shallowMount(UrlList, {
            store,
            localVue
        })
        expect(wrapper.get('.url_container').get('li')).toBeTruthy();
        expect(axios.get).toHaveBeenCalledTimes(1)
        done()
    });
});