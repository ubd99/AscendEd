import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import { useModuleStore } from "../../stores/useModule";
import { useEffect } from "react";

const VideoPage = () => {
  const param = useParams();
  const getContentSingle = useModuleStore((state) => state.getContentSingle);
  const getContent = useModuleStore((state) => state.getContent);
  const markAsCompleted = useModuleStore((state) => state.markAsCompleted);
  const checkComplete = useModuleStore((state) => state.checkCompleted);
  const content = {
    id: useModuleStore((state) => state.id),
    title: useModuleStore((state) => state.title),
    description: useModuleStore((state) => state.description),
    courseId: useModuleStore((state) => state.courseId),
    contentSingle: useModuleStore((state) => state.contentSingle),
    content: useModuleStore((state) => state.content),
  };
  useEffect(() => {
    const fetchContent = async () => {
      const res = await getContentSingle(param.contentId!);
      if (res) {
        console.log("from VideoPage: response received from getContentSingle");
        const contentsRes = await getContent(param.moduleId!);
        const completeRes = await checkComplete(param.contentId!);
      }
    };

    fetchContent();
  }, []);
  const nav = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="px-[calc(2vh+2vw)]">
        <p
          className="font-opensans ml-2 underline text-purple-500 inline"
          style={{ cursor: "pointer" }}
          onClick={() => {
            nav(`/user/course/module/${content ? content.id : null}`);
          }}
        >
          &lt; back to course
        </p>
        <p className="headertext font-semibold mt-3 ml-3 pb-10">
          {content && content.contentSingle
            ? `Video: ${content.contentSingle?.name}`
            : null}
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col bg-purple-600 shadow w-3/10 p-5 rounded-2xl gap-y-5 overflow-scroll scrollbar-hidden">
            {Array.isArray(content.content) ? (
              content.content.map((c: any, i) => (
                <div className="flex items-center">
                  <div className="rounded-full h-10 w-10 mr-3 bg-white flex items-center justify-center">
                    <p className="font-bold text-xl text-purple-600">{i + 1}</p>
                  </div>
                  <p className="text-md font-opensans text-white text-wrap">
                    {c.title}
                  </p>
                </div>
              ))
            ) : (
              <p>null</p>
            )}
          </div>
          <video
            src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${
              import.meta.env.VITE_AWS_REGION_NAME
            }.amazonaws.com/uploads/course_content/${param.courseId}/${
              param.moduleId
            }/${param.contentId}`}
            controls
            className="w-6/10 rounded-3xl max-w-[540px] max-h-[320px] shadow-purple"
          />
        </div>
        <div className="flex mt-5 justify-between">
          {content.contentSingle?.completed ? (
            <p>Completed</p>
          ) : (
            <p
              className="font-opensans text-purple-800 underline"
              onClick={() => {
                markAsCompleted(param.contentId!);
              }}
              style={{ cursor: "pointer" }}
            >
              Mark as completed
            </p>
          )}
          <p className="pl-3">
            Uploaded on:{" "}
            {content && content.contentSingle
              ? content.contentSingle!.createdAt
              : null}
          </p>
        </div>
        <div className="rounded-2xl bg-purple-300 shadow p-7 mt-5">
          <p className="headertext">Description</p>
          <p className="font-opensans mt-2">
            {content && content.contentSingle
              ? content.contentSingle.description
              : null}
          </p>
        </div>
      </div>
      <div className="flex p-[calc(3vh+3vw)]">
        <p className="mx-auto">2025&copy; - Ascended&trade;</p>
      </div>
    </div>
  );
};

export { VideoPage };
