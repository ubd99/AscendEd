import { useNavigate } from "react-router-dom";
import { useModuleStore } from "../stores/useModule";

interface IModuleInfo {
  id: string;
  className?: string;
  courseId: string;
  module?: {
    title: string;
    description: string;
  };
}

const Module_card: React.FC<IModuleInfo> = ({
  id = "",
  className = "",
  courseId = "",
  module = { title: " ", description: " " },
}) => {
  const nav = useNavigate();
  return (
    <div
      className={`relative rounded-4xl w-4/5 sm:w-3/10 sm:min-w-60 h-40 sm:h-44 md:h-45 lg:h-52 xl:h-53 flex items-center bg-white overflow-hidden ${className}`}
      style={{  
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
        cursor: "pointer",
      }}
      onClick={() => {
        console.log('from module: courseId is', courseId, "and moduleId is:", id)
        nav(`/user/course/module/${id}`)
      }}
    >
      <div className="h-full pt-5 px-5 absolute left-0 line-clamp-2">
        <p className="text-base md:text-[1.06rem] lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold">
          {module.title}
        </p>
        <p className="pt-5 font-opensans line-clamp-3">{module.description}</p>
      </div>
    </div>
  );
};
export { Module_card };
