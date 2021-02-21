
export interface ExpressError extends Error {
    code?: number,
    message: string
}