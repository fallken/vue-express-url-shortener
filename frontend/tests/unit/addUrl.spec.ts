import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import createStoreConfig from "../mocks/storeConfig";
import AddUrl from "@/components/AddUrl.vue";
import { urlList as mockUrlList } from "../mocks/urlList";
import axios from "axios"; //


jest.mock("axios", () => {
    return {
        post: jest.fn(() => Promise.resolve({
            data: {
                data: {
                    mainUrl: "www.dummyurl.com",
                    finalUrl: "www.duummyUrl.org"
                }
            }
        })),
    }
});

const localVue = createLocalVue().use(Vuex);
const storeConfig = createStoreConfig();
const store = new Vuex.Store(storeConfig);



describe("testing adding new url process", () => {
    it("test adding url", async (done) => {
        const wrapper = shallowMount(AddUrl, {
            store: store,
            localVue
        })
        let textInput: any = wrapper.find('input[type="text"]')
        await textInput.setValue(mockUrlList[0].mainUrl);
        expect(textInput.element.value).toBe(mockUrlList[0].mainUrl)
        wrapper.find(".addurl-button").trigger('click');
        expect(axios.post).toHaveBeenCalledTimes(1)
        done()
    });
    it("test add url errors clicking add url setting any data", async (done) => {
        const wrapper = shallowMount(AddUrl, {
            store: store,
            localVue
        })
        await wrapper.find(".addurl-button").trigger('click');
        expect(wrapper.find('.addurl-errors').get('span')).toBeTruthy();
        done()
    });
});