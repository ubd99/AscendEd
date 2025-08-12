import axios from "axios";
import { create } from "zustand";
import type { ICourse } from "../interfaces/Course";
import { axiosForm, axiosJson } from "../api/axios/axios";

type TCourse = {
  title: string;
  description: string;
  image: File | undefined;
  imgUrl: string;
  currentChapT: string;
  currentChapD: string;
  chapters: Array<any>;
  courses?: Array<any>;
  recentCourses?: Array<any>;
  resume: any;
  createChapter: (
    title: string,
    description: string,
    cId: string
  ) => Promise<any>;
  getChapters: (cId: string) => Promise<any>;
  getCourse: (id: string) => Promise<any>;
  setCourseData: (course: ICourse) => void;
  setChapData: (course: ICourse) => void;
  createCourse: (course: ICourse) => Promise<any>;
  getPublicCourses: (limit: number) => Promise<any>;
  getCourseEnrolls: (courseId: string, dataType: string) => Promise<any>;
  getRecentCourses: (uid: string) => Promise<any>;
  setCourses: (courses: Array<any>) => Promise<any>;
  addToResume: (
    courseId: string,
    chapterId: string,
    contentId: string
  ) => Promise<any>;
  checkResume: () => Promise<any>;
};

const useCourse = create<TCourse>((set, get) => ({
  title: " ",
  description: " ",
  chapters: [],
  image: undefined,
  imgUrl: " ",
  courses: undefined,
  setCourseData: (course) => {
    set((state) => ({
      title: course.title ? course.title : state.title,
      description: course.description ? course.description : state.description,
      image: course.image ? course.image : state.image,
      chapters: course.chapters ? course.chapters : state.chapters,
    }));
  },
  createCourse: async (course) => {
    try {
      const raw = localStorage.getItem("user-store");
      const parsed = JSON.parse(raw!);
      const tkn = parsed?.state?.token;
      const uid = parsed?.state?.uid;
      console.log("from createCourse: Token is ", tkn);
      const formData = new FormData();
      if (course.image && course.image instanceof File) {
        console.log("file appended");
        formData.append("file", course.image as File);
      }
      formData.append("title", course.title!);
      formData.append("description", course.description!);
      formData.append("uid", uid);
      console.log("posting");
      const res = await axiosForm.post(
        "/api/admin/courses/new_course",
        formData
      );
      console.log(
        "From UseCourse(CreateCourse): Created Course: ",
        formData.get("title")
      );
    } catch (e) {
      console.log("Error in useCourse(CreateCourse): ", e);
    }
  },
  currentChapT: " ",
  currentChapD: " ",
  setChapData: (course) => {
    set((state) => ({
      currentChapT: course.currentChapT,
      currentChapD: course.currentChapD,
    }));
  },
  setCourses: async (courses) => {
    set((state) => ({
      courses: courses ? courses : state.courses,
    }));
  },
  getPublicCourses: async (limit) => {
    try {
      const raw = localStorage.getItem("user-store");
      const parsed = JSON.parse(raw!);
      const tkn = parsed?.state?.token;
      console.log("from getPublicCourses: token is", tkn);
      const res = await axiosJson.get("api/courses/publicCourses", {
        params: {
          limit: limit,
        },
      });
      console.log(JSON.stringify(res.data.courses));
      get().setCourses(res.data.courses);
      return res.data.courses;
    } catch (e) {
      console.log("error in getPublicCourses: ", e);
    }
  },
  getCourse: async (id) => {
    try {
      const res = await axiosJson.get("/api/courses/getCourse", {
        params: {
          cid: id,
        },
      });
      get().setCourseData({
        title: res.data.name,
        description: res.data.description,
        rating: res.data.rating,
      });
      return res.data;
    } catch (e) {
      console.log("Error in useCourse(getCourse): ", e);
      return e;
    }
  },
  createChapter: async (title, description, cId) => {
    console.log("from createChapter: posting");
    const res = await axiosJson.post("/api/admin/courses/new_chapter", {
      id: cId,
      title: title,
      description: description,
    });
    if (res) {
      console.log(
        "Response received from axios on useCourse(createChapter): ",
        res.data
      );
      return res.data;
    } else {
      console.log("No Response received from axios, useCourse(createChapter)");
    }
  },
  getChapters: async (cId) => {
    try {
      console.log("in useCourse(getChapters)");
      const res = await axiosJson.get("/api/courses/getChapters", {
        params: {
          courseId: cId,
        },
      });
      if (res) {
        get().setCourseData({ chapters: res.data });
        console.log(
          "from useCourse(getChapters): chapters are",
          get().chapters
        );
        return res.data;
      } else {
        console.log("from useCourse(getChapters): No data received");
        return null;
      }
    } catch (e) {
      console.log("Error in useCourse(getChapters):", e);
    }
  },
  getCourseEnrolls: async (courseId, dataType) => {
    try {
      const res = await axiosJson.get("/api/admin/courses/getCourseEnrolls", {
        params: {
          courseId: courseId,
          type: dataType,
        },
      });
      if (res) {
        console.log(
          "In useCourse(getCourseEnrolls): Response received from axios"
        );
        return res.data;
      }
      console.log("In useCourse(getCourseEnrolls): No response from axios");
      return null;
    } catch (e) {
      console.log("Error in getCourseEnrolls Controller:", e);
      return null;
    }
  },
  getRecentCourses: async (uid) => {
    try {
      const res = await axiosJson.get("/api/user/getRecentCourses", {
        params: {
          uid: uid,
        },
      });
      if (res) {
        console.log(
          "From useCourse(getRecentCourses): response received from axios:",
          res.data
        );
        set((state) => ({
          recentCourses: res.data,
        }));
        return res.data;
      }
      console.log("From useCourse(getRecentCourses): No response received");
      return null;
    } catch (e) {
      console.log("Error in useCourse (getRecentCourses):", e);
      return null;
    }
  },
  addToResume: async (courseId, chapterId, contentId) => {
    try {
      const uid = JSON.parse(localStorage.getItem("user-store")!)?.state?.uid;
      const res = await axiosJson.post("/api/user/addToResume", {
        uid: uid,
        courseId: courseId,
        chapterId: chapterId,
        contentId: contentId,
      });
      if (res) {
        return true;
      } else return null;
    } catch (e) {
      console.log("Error in useCourse(addToResume):", e);
      return null;
    }
  },
  resume: undefined,
  checkResume: async () => {
    try {
      const uid = JSON.parse(localStorage.getItem("user-store")!)?.state?.uid;
      const res = await axiosJson.get("/api/user/checkResume", {
        params: {
          uid: uid,
        },
      });
      if (res) {
        set(() => ({
          resume: res.data,
        }));
        return res.data;
      } else return null;
    } catch (e) {
      console.log("error in useCourse(checkResume):", e);
      return null;
    }
  },
}));

export { useCourse };
