import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../interfaces/User";
import axios from "axios";
import { axiosJson } from "../api/axios/axios";

type Tuser = {
  f_name: string;
  l_name: string;
  email: string;
  uid: string;
  token: string;
  isadmin: boolean;
  hydrated: boolean;
  isLoggedIn: boolean;
  setLoggedIn: (loginStatus: boolean) => void;
  setUserData: (user: User) => void;
  login: (user: User) => Promise<any>;
  signup: (user: User) => Promise<any>;
};

const useAuthStore = create<Tuser>()(
  persist(
    (set, get) => ({
      f_name: " ",
      l_name: " ",
      email: " ",
      token: " ",
      uid: " ",
      isLoggedIn: false,
      isadmin: false,
      hydrated: false,
      setUserData: (user) => {
        set((state) => ({
          f_name: user.f_name,
          l_name: user.l_name,
          email: user.email,
          uid: user.uid,
          token: user.token,
          isLoggedIn: user.isLoggedIn,
        }));
      },
      login: async (user) => {
        console.log("Logging in");
        const res = await axiosJson.post("/api/login", {
          email: user.email,
          password: user.password,
        });
        if (typeof res.data.token === "string") {
          set((state) => ({
            f_name: res.data.user.f_name,
            l_name: res.data.user.l_name,
            email: res.data.user.email,
            uid: res.data.user.uid,
            isadmin: res.data.user.isadmin,
            isLoggedIn: true,
            token: res.data.token,
          }));
          console.log(
            "new values set and user",
            res.data.user.f_name,
            "has logged in"
          );
          console.log("Logged in");
          return res.data;
        } else {
          return res.data;
        }
      },
      setLoggedIn: (loginState) => {
        set((state) => ({
          isLoggedIn: loginState,
        }));
      },
      signup: async (user) => {
        try {
          const res = await axiosJson.post("/api/signup", {
            f_name: user.f_name,
            l_name: user.l_name,
            email: user.email,
            password: user.password,
          });
          if (res.status === 200) {
            console.log("signup success (status:200 - OK)");
          }
          return true;
        } catch (e) {
          console.log(`error in SignupAPI: ${e}`);
          return false;
        }
      },
    }),
    {
      name: "user-store",
      onRehydrateStorage: () => (state) => {
        state!.hydrated = true;
      },
    }
  )
);

export { useAuthStore };
