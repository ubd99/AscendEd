import axios from "axios";
import { create } from "zustand";
import { axiosForm, axiosJson } from "../api/axios/axios";

type TEnrollee = {
  uid: string;
  courseId: string;
  token: string;
  weeklyEnrollments?: Record<string, number>;
  enrolled?: boolean;
  setEnrollee: (
    uid?: string,
    courseId?: string,
    token?: string,
    weeklyEnrollments?: Record<string, number>
  ) => void;
  enroll: (uid: string, courseId: string) => Promise<any>;
  checkEnroll: (uid: string, courseId: string) => Promise<any>;
  getWeeklyEnrollments: () => Promise<any>;
};

const useEnrollStore = create<TEnrollee>((set, get) => ({
  uid: " ",
  courseId: " ",
  weeklyEnrollments: undefined,
  enrolled: undefined,
  setEnrollee: (uid?, courseId?, token?, weeklyEnrollments?) => {
    set((state) => ({
      uid: uid ? uid : state.uid,
      courseId: courseId ? courseId : state.courseId,
      token: token ? token : state.token,
      weeklyEnrollments: weeklyEnrollments
        ? weeklyEnrollments
        : state.weeklyEnrollments,
    }));
  },
  token: " ",
  enroll: async (uid, courseId) => {
    try {
      console.log("from enrollStore(enroll) axios request sent");
      const res = await axiosJson.post("/api/user/enroll", {
        uid: uid,
        courseId: courseId,
      });
      set((state) => ({
        enrolled: true,
      }));
      return res;
    } catch (e) {
      console.log("Error in enrollStore(Enroll):", e);
    }
  },
  checkEnroll: async (uid, courseId) => {
    try {
      const res = await axiosJson.get("/api/user/checkEnroll", {
        params: {
          uid: uid,
          courseId: courseId,
        },
      });
      set(() => ({
        enrolled: res.data.enrolled,
      }));
      return res.data.enrolled;
    } catch (e) {
      console.log("error in useEnrollStore(checkEnroll):", e);
      return null;
    }
  },
  getWeeklyEnrollments: async () => {
    try {
      const res = await axiosJson.get("/api/admin/getWeeklyEnrollments");
      if (res) {
        console.log(
          "Response received from axios for weekly enrollments:",
          res.data
        );
        get().setEnrollee(undefined, undefined, undefined, res.data);

        return res.data;
      }
      console.log(
        "No data received from axios for getWeeklyEnrollments, returning null"
      );
    } catch (e) {
      console.log("Error in getWeeklyEnrollments:", e);
    }
  },
}));

export { useEnrollStore };
