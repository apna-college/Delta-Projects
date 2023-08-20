import React, { lazy, Suspense } from "react";
import { resumeDisplayStyles } from "./BlankTempComp/ResumeDisplayStyles";
import LoadingComp from "../Loader/LoadingComp";
const ResumeDisplay = lazy(() => import("./BlankTempComp/ResumeDisplay"));
const ResumeEditingComp = lazy(() =>
  import("./BlankTempComp/ResumeEditingComp")
);
const BlankTemplate = () => {
  return (
    <section className="w-full flex justify-center gap-5 items-center flex-col lg:flex-row lg:px-2">
      <Suspense fallback={<LoadingComp />}>
        <ResumeDisplay displayStyles={resumeDisplayStyles} />
      </Suspense>
      <Suspense fallback={<LoadingComp />}>
        <ResumeEditingComp />
      </Suspense>
    </section>
  );
};

export default BlankTemplate;
