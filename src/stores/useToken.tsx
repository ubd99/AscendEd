import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { axiosJson } from "../api/axios/axios";

type Ttoken = {
  token: string | null;
  setToken: (t: string) => void;
  checkState: () => Promise<any>;
  adminAPI: () => Promise<any>;
  adminCheck: () => Promise<any>;
  profileAPI: () => Promise<any>;
};

const useToken = create<Ttoken>()(
  persist(
    (set, get) => ({
      token: " ",
      setToken: (t) =>
        set({
          token: t,
        }),
      adminAPI: async () => {
        try {
          console.log(
            "adminAPI triggered, hitting http://localhost:5000/api/admin/dashboard"
          );
          const data = await axiosJson.get("/api/admin/dashboard");
          if (data) {
            console.log(
              `accessed admin dash and response is: ${JSON.stringify(
                data.data
              )}`
            );
          } else {
            console.log("data not received");
          }
        } catch (e) {
          console.log(`Error in adminAPI: ${e}`);
        }
      },
      profileAPI: async () => {
        try {
          console.log("profileAPI Triggered");
          const data = await axiosJson.get("/api/user/profile");
          console.log(data.data);
        } catch (e) {
          console.log("error in ProfileAPI: ", e);
        }
      },
      checkState: async () => {
        try {
          const res = await axiosJson.get("/api/init");
          return true;
        } catch (e: any) {
          console.log("Error in checkState: ", e);
          if (e.code === "ERR_BAD_REQUEST" || e.status === 401) {
            return false;
          } else {
            const r = await get().checkState();
            return r;
          }
        }
      },
      adminCheck: async () => {
        try {
          const res = await axiosJson.get("/api/admin/adminCheck");
          if (res) console.log("User is an admin");
        } catch (e) {
          console.log("Error in useToken(adminCheck)", e);
        }
      },
    }),
    {
      name: "tokenStorage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export { useToken };
