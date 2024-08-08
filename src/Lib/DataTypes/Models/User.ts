export type CommonModelType = {
    createdOn?: Date
    updatedOn?: Date
    isDeleted?: boolean
}

export type UserModelType<T> = T & {
    name: string
    email: string
    password: string
    work:string
    token: string
    comparePassword?(candidatePassword: string): boolean
}