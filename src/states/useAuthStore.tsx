import { create } from "zustand"

type User = {
    f_name : string,
    l_name : string,
    username : string,
    email : string,
    password : string,
    phone : number,
    loggedIn : boolean
}

const UseAuthStore = create<User>((set)=>({
    f_name : "f_name",
    l_name : "l_name",
    username : "username",
    email : "email",
    password : "password",
    phone : 12345678910,
    loggedIn : false,
    login : (em: string, pass: string) => {
        set((state)=>({
            email : em,
            password : pass,
            f_name : "fnametobefetched",
            l_name : "lnametobefetched",
            phone : 12345678901,
            loggedIn : true
        }))
    },
    logout : () => {
        set((state)=>({
            loggedIn : false,
            f_name : " ",
            l_name : " ",
            email : " ",
            password : " ",
            phone : 0,
        }))
    }
}))

export {UseAuthStore}