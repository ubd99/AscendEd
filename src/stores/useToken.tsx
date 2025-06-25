import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Ttoken = {
  token: string | null;
  setToken: (t: string) => void;
  checkState: () => Promise<any>;
  adminAPI: () => Promise<any>;
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
          const data = await axios.get(
            "http://localhost:5000/api/admin/dashboard",
            {
              headers: {
                Authorization: `Bearer ${get().token}`,
              },
            }
          );
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
          const data = await axios.get(
            "http://localhost:5000/api/user/profile",
            {
              headers: {
                Authorization: `Bearer ${get().token}`,
              },
            }
          );
          console.log(data.data);
        } catch (e) {
          console.log("error in ProfileAPI: ", e);
        }
      },
      checkState: async () => {
        const t = localStorage.getItem('user-store');
        const parsed = JSON.parse(t!);
        const tkn = parsed?.state?.token;
        console.log('from checkState: token is ', tkn);
        try {
          const res = await axios.get("http://localhost:5000/api/init", {
            headers: {
              Authorization: `Bearer ${tkn}`,
            },
          });
          return true;
        } catch (e) {
          console.log("Error in checkState: ",e);
          return false;
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
