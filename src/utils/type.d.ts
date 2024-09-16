declare module 'AppModels'{
    export type PagingOption = {
        pageIndex?: number,
        pageTotal?: number
    }
    export type SortOption = {
        field?: string,
        direction?: string,
    }
    export type BaseResponse<Object> = {
        has_error?: boolean,
        payload?: Object,
        error?: any
    }
}