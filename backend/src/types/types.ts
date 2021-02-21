export type ResponseBody = {
    meta: {
        code: number,
        msg: string | null,
        detail: object
    },
    data: object
}

export type UrlDbItem = {
    _id: string,
    url: string,
    createdAt:Date
}

export type ValidatorErrorObject = {
    msg: string,
    param: object
}


