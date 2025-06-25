import { Outlet } from "react-router-dom";
import { useToken } from "../stores/useToken";
import { useAuthStore } from "../stores/useAuthStore";

export const RootLayout = () => {
  const init = useToken((state) => state.checkState);
  const token = JSON.parse(localStorage.getItem('user-store')!)?.state?.token;
  const setUserData = useAuthStore((state) => state.setUserData);
  (async () => {
    console.log("currently: token is: ", token);
    const status = await init();
    if (!status) {
      setUserData({
        f_name: " ",
        l_name: " ",
        email: " ",
        password: " ",
        uid: " ",
        token: " ",
        isLoggedIn: false,
      });
      localStorage.clear();
      console.log('localStorage has been cleared')
    }
  })();
  return <Outlet />;
};
