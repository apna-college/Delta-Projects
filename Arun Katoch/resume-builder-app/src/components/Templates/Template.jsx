import React from "react";
import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import LoadingComp from "../Loader/LoadingComp";
const BlankTemplate = lazy(() => import("./BlankTemplate"));
const FirstTemplate = lazy(() => import("./FirstTemplate"));
const SecondTemplate = lazy(() => import("./SecondTemplate"));
const ThirdTemplate = lazy(() => import("./ThirdTemplate"));

const Template = () => {
  const { tempName } = useParams();
  return (
    <>
      <Suspense fallback={<LoadingComp />}>
        {tempName === "blankTemplate" && <BlankTemplate />}
      </Suspense>
      <Suspense fallback={<LoadingComp />}>
        {tempName === "firstTemplate" && <FirstTemplate />}
      </Suspense>
      <Suspense fallback={<LoadingComp />}>
        {tempName === "secondTemplate" && <SecondTemplate />}
      </Suspense>
      <Suspense fallback={<LoadingComp />}>
        {tempName === "thirdTemplate" && <ThirdTemplate />}
      </Suspense>
    </>
  );
};
export default Template;
