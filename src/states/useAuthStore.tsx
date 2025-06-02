import { create } from "zustand"

type User = {
    name : string,
    username : string,
    email : string,
    password : string,
    phone : number,
}

const UseAuthStore = create<User>((set)=>({
    name : "name",
    username : "username",
    email : "email",
    password : "password",
    phone : 12345678910,
    login : (em: string, pass: string) => {
        set((state)=>({
            email : em,
            password : pass,
            name : "nametobefetched",
            phone : 12345678901
        }))
    }
}))

export {UseAuthStore}