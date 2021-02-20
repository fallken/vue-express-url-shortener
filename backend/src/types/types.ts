export type ResponseBody = {
    meta:{
        code: number,
        msg: string|null,
        detail: object
    },
    data: object
}