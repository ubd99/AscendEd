import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import { useModuleStore } from "../../stores/useModule";
import { useEffect, useState } from "react";
import type { IModule } from "../../interfaces/Module";

const ModulePage = () => {
  const nav = useNavigate();
  const param = useParams();
  const getModuleData = useModuleStore((state) => state.getModule);
  const getContent = useModuleStore((state) => state.getContent);
  const setModuleData = useModuleStore((state) => state.setModule);
  const [content, setContent] = useState<any>();
  const [module, setModule] = useState<IModule>();
  useEffect(() => {
    const fetchModuleData = async () => {
      try {
        const data: IModule = await getModuleData(param.moduleId!);
        setModuleData(param.moduleId);
        const contentData = await getContent(param.moduleId!);
        if (data) {
          setModule(data);
        }
        if (contentData) {
          setContent(contentData);
        }
      } catch (e) {
        console.log("Error fetchModuleData:", e);
      }
    };
    fetchModuleData();
  }, []);
  return (
    <div>
      <Navbar />
      {module ? (
        <div className="p-[calc(2vh+2vw)]">
          <div className="grid md:flex justify-center">
            <div className="order-2 md:order-1 md:w-1/2 items-stretch">
              <p className="font-opensans font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">{`Phase: ${module.title}`}</p>
              <p className="font-opensans py-10 pr-10 text-base md:text-md lg:text-lg xl:text-xl">{`${module.description}`}</p>
            </div>
            <div className="order-1 md:order-2 md:w-1/2 items-stretch">
              <img
                src={`https://${
                  import.meta.env.VITE_AWS_BUCKET_NAME
                }.s3.amazonaws.com/uploads/coursetemps/${module.courseId}`}
                className="mx-auto mt-10 mb-20 md:mt-0 md:mb-auto md:w-3/4 md:h-full rounded-xl xl:rounded-4xl object-cover"
              />
            </div>
          </div>
          <div className="hidden md:block lg:hidden bg-transparent w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
          <table className="table-fixed w-full border-separate border-spacing-y-10">
            <tbody>
              {Array.isArray(content) ? (
                content.map((c: any) => {
                  return (
                    <tr
                      className="rounded-xl shadow-sm shadow-black"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        nav(
                          `/user/course/${c.courseId}/${c.chapterId}/content/${c.id}`
                        );
                      }}
                    >
                      <td className="w-1/2 text-center p-2 font-semibold">
                        <p className="text-purple-800">{c.title}</p>
                      </td>
                      <td className="w-1/2 bordered font-semibold truncate">
                        {c.description}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      ) : null}
      <div className="flex p-[calc(3vh+3vw)]">
        <p className="mx-auto">2025&copy; - Ascended&trade;</p>
      </div>
    </div>
  );
};
export { ModulePage };

//<button
//  className="buttonclass"
//  onClick={() => {
//    nav(`/admin/addContent/${module.courseId}/${param.moduleId}`);
//  }}
//>
//  Add Content
//</button>;
