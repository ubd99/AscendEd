import axios from "axios";
import { create } from "zustand";
import type { IModule } from "../interfaces/Module";
import { axiosForm, axiosJson } from "../api/axios/axios";

type TModule = {
  id: string;
  videoId: string;
  title: string;
  description: string;
  courseId: string;
  video?: File;
  setModule: (
    id?: string,
    title?: string,
    description?: string,
    courseId?: string,
    video?: File,
    videoId?: string
  ) => void;
  addContent: (module: IModule, video?: File) => Promise<any>;
  getContent: (id: string) => Promise<any>;
  getContentSingle: (videoId: string) => Promise<any>;
  getModule: (id: string) => Promise<any>;
};

const useModuleStore = create<TModule>((set, get) => ({
  id: " ",
  title: " ",
  description: " ",
  courseId: " ",
  videoId: " ",
  video: undefined,
  setModule: (id, title, description, courseId, video, videoId) => {
    set((state) => ({
      id: id ? id : state.id,
      title: title ? title : state.title,
      description: description ? description : state.description,
      courseId: courseId ? courseId : state.courseId,
      video: video ? video : state.video,
      videoId: videoId ? videoId : state.videoId,
    }));
  },
  addContent: async (module, video) => {
    try {
      const formData = new FormData();
      formData.append("title", module.title!);
      formData.append("description", module.description!);
      formData.append("courseId", module.courseId!);
      formData.append("chapterId", module.id!); //though primarily for content Id, here to be used to pass chapter/phase id
      if (video) {
        formData.append("file", video as File);
      }
      const res = await axiosForm.post(
        "/api/admin/courses/new_content",
        formData
      );
      if (res) {
        console.log("in useModuleStore(addContent), response received: ", res);
        return res.data;
      } else {
        console.log("in useModuleStore(addContent): no response received");
        return null;
      }
    } catch (e) {
      console.log("Error in useModuleStore(addContent):", e);
      return null;
    }
  },
  getContent: async (id) => {
    try {
      const res = await axiosJson.get("/api/user/courses/chapterContent", {
        params: {
          chapterId: id,
        },
      });
      if (res) {
        console.log("Received content for chapter/module:", id);
        return res.data;
      }
    } catch (e) {
      console.log("Error in useModuleStore(getContent):", e);
    }
  },
  getModule: async (id) => {
    try {
      const res = await axiosJson.get("/api/user/courses/getModule", {
        params: {
          id: id,
        },
      });
      const module: IModule = {
        id: res.data.id,
        title: res.data.name,
        description: res.data.description,
        courseId: res.data.courseId,
      };
      return module;
    } catch (e) {
      console.log("Error in useModuleStore (getModule):", e);
      return null;
    }
  },
  getContentSingle: async (videoId) => {
    try {
      const res = await axiosJson.get("/api/user/courses/getChapter", {
        params: {
          id: videoId,
        },
      });
      if (res) {
        console.log("received content:", res.data);
        return res.data;
      }
      console.log(
        "from useModuleStore(getContentSingle): No Response received from axios"
      );
    } catch (e) {
      console.log("Error in getContentSingle", e);
    }
  },
}));

export { useModuleStore };
