import React from "react";
import { Link } from "react-router-dom";
const HomepageContent = () => {
  return (
    <section className="w-full h-[80vh] bg-gray-100 px-5 py-1 sm:h-[60vh]">
      <div className="w-full h-[70%] flex flex-col gap-2 items-center justify-center py-4 overflow-y-auto">
        <h1 className="text-center text-sm font-semibold sm:text-lg">
          Your Free Resume Builder Is Here
        </h1>
        <p className="text-center text-xs sm:text-base">
          This professional resume maker is a user-friendly platform designed to
          help individuals create impressive resumes in minutes. With a wide
          range of templates and customization options available, users can
          easily craft a professional-looking resume that highlights their
          skills, experience, and qualifications. The web app features a simple
          interface that guides users through the process, offering helpful tips
          and suggestions along the way.
        </p>
      </div>

      {/* Tags, Filters */}
      <div className="w-full h-[30%] flex items-center justify-center overflow-y-auto">
        <div className="w-[90%] flex items-center justify-center gap-2 flex-wrap">
          <div className="flex items-center justify-center px-3 py-1 border bg-gray-300 rounded-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-200">
            <Link to="/get-started" className="text-sm sm:text-base">
              Templates
            </Link>
          </div>
          <div className="flex items-center justify-center px-3 py-1 border bg-gray-300 rounded-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-200">
            <Link to="/ideas" className="text-sm sm:text-base">
              Ideas
            </Link>
          </div>
          <div className="flex items-center justify-center px-3 py-1 border bg-gray-300 rounded-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-200">
            <Link to="/layouts" className="text-sm sm:text-base">
              Layouts
            </Link>
          </div>
          <div className="flex items-center justify-center px-3 py-1 border bg-gray-300 rounded-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-200">
            <Link to="/suggestions" className="text-sm sm:text-base">
              Suggestions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageContent;
