type Todo = {
    state: boolean,
    id: number,
    content: string
}
enum Filter {
    ALL,
    COMP,
    YET
}

export type { Todo }
export { Filter }