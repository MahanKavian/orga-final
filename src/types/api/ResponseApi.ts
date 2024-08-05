export interface ResponseApi<T> {
    data: Array<EntityType<T>>
    meta?: Meta
}
export interface ResponseApiSingle<T> {
    data: EntityType<T>
    meta?: Meta
}
export interface EntityType<T> {
    id: number
    attributes: T
}

interface Meta {
    pagination: Pagination
}

interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}