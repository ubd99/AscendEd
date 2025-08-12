import { create } from "zustand";
import type { IModule } from "../interfaces/Module";
import { axiosForm, axiosJson } from "../api/axios/axios";

type TModule = {
  id: string;
  title: string;
  description: string;
  courseId: string;
  contentSingle?: {
    name?: string;
    description?: string;
    completed?: boolean;
    createdAt?: string;
    updatedAt?: string;
  };
  content?: Array<any>;
  markAsCompleted: (contentId: string) => Promise<any>;
  checkCompleted: (contentId: string) => Promise<any>;
  setModule: (
    id?: string,
    title?: string,
    description?: string,
    contentSingle?: {
      name?: string;
      description?: string;
      createdAt?: string;
      updatedAt?: string;
      completed?: boolean;
    },
    courseId?: string,
    content?: Array<any>
  ) => void;
  getCompletionPercentage: (uid: string, courseId: string) => Promise<any>;
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
  content: [],
  contentSingle: undefined,
  getCompletionPercentage: async (courseId) => {
    try {
      const uid = JSON.parse(localStorage.getItem("user-store")!)?.state?.uid;
      const percent = await axiosJson.post("/api/user/getPercentCompleted", {
        courseId: courseId,
        uid: uid,
      });
      if (percent) {
        return percent;
      } else return null;
    } catch (e) {
      console.log("Error in useModuleStore(getCompletionPercentage):", e);
      return null;
    }
  },
  markAsCompleted: async (contentId) => {
    const uid = JSON.parse(localStorage.getItem("user-store")!)?.state?.uid;
    const res = await axiosJson.post("/api/user/courses/content/markComplete", {
      contentId: contentId,
      uid: uid,
    });
    const completed = true;
    if (res) {
      set((state) => ({
        contentSingle: {
          ...state.contentSingle,
          completed,
        },
      }));
    } else console.log("completion status not updated");
  },
  checkCompleted: async (contentId) => {
    try {
      const uid = JSON.parse(localStorage.getItem("user-store")!)?.state?.uid;

      const res = await axiosJson.post(
        "/api/user/courses/content/checkComplete",
        {
          contentId: contentId,
          uid: uid,
        }
      );
      if (res) {
        let completed = true;
        set((state) => ({
          contentSingle: {
            ...get().contentSingle,
            completed,
          },
        }));
      } else {
        let completed = false;
        set((state) => ({
          contentSingle: {
            ...get().contentSingle,
            completed,
          },
        }));
      }
    } catch (e) {
      console.log("Error in useModuleStore(checkCompleted):", e);
    }
  },
  setModule: (id, title, description, contentSingle, courseId, content) => {
    set((state) => ({
      id: id ? id : state.id,
      title: title ? title : state.title,
      description: description ? description : state.description,
      courseId: courseId ? courseId : state.courseId,
      contentSingle: contentSingle ? contentSingle : state.contentSingle,
      content: content ? content : state.content,
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
        get().setModule(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          res.data
        );
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
      get().setModule(
        res.data.id,
        res.data.name,
        res.data.description,
        undefined,
        res.data.courseId,
        undefined
      );
      return module;
    } catch (e) {
      console.log("Error in useModuleStore (getModule):", e);
      return null;
    }
  },
  getContentSingle: async (videoId) => {
    try {
      const res = await axiosJson.get("/api/user/courses/getContentSingle", {
        params: {
          id: videoId,
        },
      });
      if (res) {
        console.log("received content:", res.data);
        get().setModule(
          res.data.chapterId,
          undefined,
          undefined,
          {
            name: res.data.title,
            description: res.data.description,
            createdAt: res.data.createdAt,
            updatedAt: res.data.updatedAt,
          },
          res.data.courseId
        );
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
