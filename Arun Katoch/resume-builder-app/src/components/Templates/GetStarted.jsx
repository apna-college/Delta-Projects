import React, { lazy, Suspense } from "react";
import Navbar from "../Navbar";
const AvailableTemplates = lazy(() => import("./AvailableTemplates"));
import templatesData from "../../TemplatesData/TemplatesData";
import { SpinnerCircular } from "spinners-react";

const GetStarted = () => {
  return (
    <section>
      <Navbar />
      <div className="w-full flex flex-col px-5">
        <div className="w-full flex items-center justify-center py-5">
          <span className="text-sm font-semibold sm:text-base lg:text-lg ">
            Select your template from below:
          </span>
        </div>
        {/* Available templates */}
        <div className="w-full flex flex-wrap gap-10 items-center justify-center py-10">
          {/* Template: */}
          {templatesData.map((currElm) => {
            return (
              <Suspense
                fallback={
                  <SpinnerCircular size="3%" color="#0096FF" enabled="true" />
                }
                key={currElm.id}
              >
                <AvailableTemplates details={currElm} />
              </Suspense>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
