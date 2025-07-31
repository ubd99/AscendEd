import axios from "axios";
import { create } from "zustand";
import type { ICourse } from "../interfaces/Course";
import { axiosForm, axiosJson } from "../api/axios/axios";

type TChapter = {
  title: string;
  description: string;
};

type TCourse = {
  title: string;
  description: string;
  image: File | undefined;
  imgUrl: string;
  currentChapT: string;
  currentChapD: string;
  chapters: TChapter[];
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
};

const useCourse = create<TCourse>((set, get) => ({
  title: " ",
  description: " ",
  chapters: [],
  image: undefined,
  imgUrl: " ",
  setCourseData: (course) => {
    set((state) => ({
      title: course.title,
      description: course.description,
      image: course.image,
      chapters: course.chapters,
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
      return res.data;
    } catch (e) {
      console.log("Error in useCourse(getCourse): ", e);
      return e;
    }
  },
  createChapter: async (title, description, cId) => {
    const raw = localStorage.getItem("user-store");
    const parsed = JSON.parse(raw!);
    const tkn = parsed?.state?.token;
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
        return res.data;
      } else return null;
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
}));

export { useCourse };
