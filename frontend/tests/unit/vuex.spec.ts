import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import createStoreConfig from "../mocks/storeConfig";
import { urlList as mockUrlList } from "../mocks/urlList";


let store: any;

jest.mock("axios", () => ({
    get: jest.fn(() => Promise.resolve({
        data: {
            data: {
                items: mockUrlList
            }
        }
    })),
}));

beforeEach(() => {
    createLocalVue().use(Vuex);
    const storeConfig = createStoreConfig();
    store = new Vuex.Store(storeConfig);
});

describe("Post Store Tests", () => {
    it("testing store data and mutations", async (done) => {
        await store.commit("SET_URL_LIST", mockUrlList);
        expect(store.state.url.urlList).toEqual(mockUrlList);
        done();
    });
    it("testing geturl list actions ", async (done) => {
        await store.dispatch("GET_URL_LIST");
        expect(store.state.url.urlList).toEqual(mockUrlList);
        done();
    });
});