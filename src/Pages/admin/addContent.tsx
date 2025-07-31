import { useNavigate, useParams } from "react-router-dom";
import { useState, type ChangeEvent } from "react";
import { Navbar } from "../../Components/Navbar";
import { Loading } from "../../Components/loadingSpinner";
import { useModuleStore } from "../../stores/useModule";
import type { IModule } from "../../interfaces/Module";

const AddContent = () => {
  const nav = useNavigate();
  const param = useParams();
  const [video, setVideo] = useState<File>();
  const [sub, setSub] = useState<boolean>(false);
  const setModuleData = useModuleStore((state) => state.setModule);
  const addContent = useModuleStore((state) => state.addContent);
  const fields = {
    title: "",
    description: "",
  };
  const [err, setErr] = useState({
    title: true,
    description: true,
    video: true,
  });
  const [values, setValues] = useState(fields);
  const [loading, setLoading] = useState<boolean>(false);

  const videoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVideo(e.target.files[0]);
      setErr({ ...err, ["video"]: false });
    }
  };

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (name === "description" && value.length < 8) {
      setErr({ ...err, [name]: true });
    } else if (name === "title" && value.length < 1) {
      setErr({ ...err, [name]: true });
    } else setErr({ ...err, [name]: false });
  };

  const subHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      e.preventDefault();
      if (Object.values(err).some((val) => val === true)) {
        setSub(true);
        console.log("Submit Handler has returned null")
        return null;
      } else {
        setModuleData(
          param.chapterId!,
          values.title,
          values.description,
          param.courseId!,
          video!
        );
        console.log("Module Data set")
        const module: IModule = {
          id: param.chapterId,
          title: values.title,
          description: values.description,
          courseId: param.courseId,
        };
        const res = await addContent(module, video);
        if (res) {
          console.log("successfully added content:", res);
          nav(`/admin/course/module/${param.chapterId}`);
        }
        else{
          console.log("Failed")
        }
      }
    } catch (e) {
      console.log("Error in addChapter(subHandler): ", e);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full p-[calc(3vh+3vw)] lg:px-[calc(5vw+5vh)]">
        <div className="hidden sm:block w-3/7 my-auto mx-auto">
          <img
            src="../../../src/assets/courseAdd.png"
            className="h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center lg:p-3 sm:w-full my-auto mx-auto">
          <p className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-purple-700">
            Add a new course content
          </p>
          <p className="paratext pt-10">Enter content details below</p>
          <div className="mx-auto sm:w-5/7 xl:4/7">
            <form className="pt-10 space-y-3" onSubmit={subHandler}>
              <div className="text-left">
                <label htmlFor="title">
                  <p className="font-opensans text-md px-1">Title</p>
                </label>
              </div>
              <input
                id="title"
                name="title"
                value={values.title}
                type="text"
                placeholder="Name/title"
                className="w-full p-2 lg:p-3 border-2 border-gray-600 rounded-xl"
                onChange={changeHandler}
              />
              {err.title && sub ? (
                <p className="text-xs text-red-600">
                  Please enter a valid title
                </p>
              ) : null}
              <div />
              <div className="text-left">
                <label htmlFor="description">
                  <p className="font-opensans text-md px-1">Description</p>
                </label>
              </div>
              <textarea
                id="description"
                name="description"
                value={values.description}
                placeholder="Enter description here"
                rows={7}
                onChange={changeHandler}
                className="w-full p-2 lg:p-3 border-2 border-gray-600 rounded-xl"
              />
              {err.description && sub ? (
                <p className="text-xs text-red-600">
                  A description of minimum 8 characters is required
                </p>
              ) : null}
              <div>
                <label htmlFor="file">Upload video here</label>
                <input
                  id="file"
                  type="file"
                  className="border-1 border-black"
                  style={{ cursor: "pointer" }}
                  onChange={videoHandler}
                />
                {err.video && sub ? (
                  <p className="text-xs">Please upload a file</p>
                ) : null}
              </div>
              <div className="flex justify-center space-x-10">
                <button className="buttonclass" type="submit">
                  Add Content
                </button>
              </div>
              {loading ? (
                <div>
                  <Loading />
                  <p className="text-sm text-purple-600">
                    Uploading video. Please wait..
                  </p>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
      <div className="p-20 text-center">
        <p>2025&copy; - AscendEd&trade;</p>
      </div>
    </div>
  );
};

export { AddContent };
