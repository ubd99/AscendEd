import axios from "axios";
import { create } from "zustand";
import type { ICourse } from "../interfaces/Course";

type TChapter = {
  title: string;
  description: string;
};

type TCourse = {
  title: string;
  description: string;
  chapters: TChapter[];
  setCourseData: (course: ICourse) => void;
  createCourse: () => Promise<any>;
  getPublicCourses: (limit: number) => Promise<any>;
};

const raw = localStorage.getItem("user-store");
const parsed = JSON.parse(raw!);
const token = parsed?.state?.token;

const useCourse = create<TCourse>((set, get) => ({
  title: " ",
  description: " ",
  chapters: [],
  setCourseData: (course) => {
    set((state) => ({
      title: course.title,
      description: course.description,
    }));
  },
  createCourse: async () => {
    try {
      console.log("from createCourse: Token is ", token);
      const res = await axios.post(
        "http://localhost:5000/api/admin/courses/new_course",
        {
          name: get().title,
          description: get().description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(
        "From UseCourse(CreateCourse): Created Course: ",
        get().title
      );
    } catch (e) {
      console.log("Error in useCourse(CreateCourse): ", e);
    }
  },
  getPublicCourses: async (limit) => {
    try {
      console.log('from getPublicCourses: token is', token)
      const res = await axios.get(
        "http://localhost:5000/api/courses/publicCourses",
        {
          params: {
            limit: limit,
          },

        }
      );
      console.log(JSON.stringify(res.data.courses));
    } catch (e) {
      console.log("error in getPublicCourses: ", e);
    }
  },
}));

export { useCourse };
