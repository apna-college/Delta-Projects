import React, { useContext, useRef, lazy, Suspense } from "react";
import { previewResumeStyles } from "../Templates/BlankTempComp/ResumeDisplayStyles";
import { AppContext } from "../../App";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { SpinnerCircular } from "spinners-react";
const ResumeDisplay = lazy(() =>
  import("../Templates/BlankTempComp/ResumeDisplay")
);

const PreviewResume = () => {
  let resumeDivRef = useRef();
  const appContext = useContext(AppContext);

  const downloadPDF = () => {
    const capture = resumeDivRef.current;
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/jpeg");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "jpeg", 0, 0, componentWidth, componentHeight);
      doc.save(`${appContext.formState.userName}Resume.pdf`);
    });
  };

  return (
    <div className="w-[780px] h-[1130px] flex flex-col items-center overflow-scroll lg:w-full lg:bg-slate-200 lg:overflow-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-slate-200 scrollbar-track-rounded-lg">
      <Suspense
        fallback={<SpinnerCircular size="5%" color="#0096FF" enabled="true" />}
      >
        <ResumeDisplay displayStyles={previewResumeStyles} ref={resumeDivRef} />
      </Suspense>
      <button
        className="text-base text-center px-8 py-2 my-5 bg-blue-400 hover:bg-blue-600 text-white"
        onClick={downloadPDF}
      >
        Download
      </button>
    </div>
  );
};

export default PreviewResume;
