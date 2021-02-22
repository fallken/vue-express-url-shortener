import { url } from "@/store/url";

export default function createStoreConfig() {
    return {
        modules: {
            url:url,
        },
    };
}