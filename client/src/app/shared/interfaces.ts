export interface User {
    email: string
    username: string
    password: string
}

export interface Comment {
    parent: number,
    related: number,
    file: File,
    text: string
}