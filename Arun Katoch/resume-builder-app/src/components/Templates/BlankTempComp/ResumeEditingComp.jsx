import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
const AddDetailsEditing = lazy(() =>
  import("../EditingCompSections/AddDetailsEditing")
);
const SectionOneEditing = lazy(() =>
  import("../EditingCompSections/SectionOneEditing")
);
const SectionTwoEditing = lazy(() =>
  import("../EditingCompSections/SectionTwoEditing")
);
const SectionThreeEditing = lazy(() =>
  import("../EditingCompSections/SectionThreeEditing")
);
const LanguageEditing = lazy(() =>
  import("../EditingCompSections/LanguageEditing")
);
const HobbiesEditing = lazy(() =>
  import("../EditingCompSections/HobbiesEditing")
);
const SkillsEditing = lazy(() =>
  import("../EditingCompSections/SkillsEditing")
);
const SocialLinksEditing = lazy(() =>
  import("../EditingCompSections/SocialLinksEditing")
);
const AddressEditing = lazy(() =>
  import("../EditingCompSections/AddressEditing")
);
// const DobEditing = lazy(() => import("../EditingCompSections/DobEditing"));
// const ContactEditing = lazy(() =>
//   import("../EditingCompSections/ContactEditing")
// );
// const TaglineEditing = lazy(() =>
//   import("../EditingCompSections/TaglineEditing")
// );
// const NameEditing = lazy(() => import("../EditingCompSections/NameEditing"));

const ResumeEditingComp = () => {
  return (
    <>
      <div className="w-screen h-screen p-1 sm:mt-5 sm:p-5 sm:w-[80%] lg:h-[40rem] lg:w-[60%] bg-white">
        <form
          autoComplete="off"
          className="w-full h-full p-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-full h-full flex flex-col gap-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-slate-200 scrollbar-track-rounded-lg">
            <Suspense
              fallback={
                <SpinnerCircular size="5%" color="#0096FF" enabled="true" />
              }
            >
              <AddDetailsEditing />
            </Suspense>
            <Suspense
              fallback={
                <SpinnerCircular size="5%" color="#0096FF" enabled="true" />
              }
            >
              <AddressEditing />
            </Suspense>

            <Suspense
              fallback={
                <SpinnerCircular size="5%" color="#0096FF" enabled="true" />
              }
            >
              <SocialLinksEditing />
            </Suspense>
            <Suspense
              fallback={
                <SpinnerCircular size="5%" color="#0096FF" enabled="true" />
              }
            >
              <SkillsEditing />
            </Suspense>
            <Suspense
              fallback={
                <SpinnerCircular size="5%" color="#0096FF" enabled="true" />
              }
            >
              <HobbiesEditing />
            </Suspense>
            <Suspense
              fallback={
                <SpinnerCircular size="5%" color="#0096FF" enabled="true" />
              }
            >
              <LanguageEditing />
            </Suspense>
            {/* Resume Section -1 (Default-Education Section) */}
            <Suspense
              fallback={
                <SpinnerCircular size="5%" color="#0096FF" enabled="true" />
              }
            >
              <SectionOneEditing />
            </Suspense>
            {/* Resume Section -2 (Default-Technical Skills Section)*/}
            <Suspense
              fallback={
                <SpinnerCircular size="5%" color="#0096FF" enabled="true" />
              }
            >
              <SectionTwoEditing />
            </Suspense>
            {/* Resume Section -3 (Default- Extra-curricular Activities Section)*/}
            <Suspense
              fallback={
                <SpinnerCircular size="5%" color="#0096FF" enabled="true" />
              }
            >
              <SectionThreeEditing />
            </Suspense>

            <Link
              to="preview"
              className="text-base text-center py-2 bg-blue-400 hover:bg-blue-600 text-white"
            >
              Full Page Preview
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResumeEditingComp;
