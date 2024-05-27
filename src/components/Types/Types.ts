// Types of Todos
export interface TodoTypes {
    userId: number
    id: number
    title: string
    completed: boolean
    check?: boolean
    delete?: boolean
}
// __________________________________________________________________________________________________

// Types of users
export interface UserTypes {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}
// __________________________________________________________________________________________________

// Type of initialData 
export interface initialData {
    todos: TodoTypes[]
    todosLoading: boolean
    users: UserTypes[]
    usersLoad: boolean
    completed?: boolean
}
// __________________________________________________________________________________________________

// For the todo.tsx file
export interface User {
    id: number
    email: string
}
// __________________________________________________________________________________________________