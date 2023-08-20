import React, { useContext, forwardRef } from "react";
import { AppContext } from "../../../App";
import userIcon from "../../../assets/userIcon.png";
import educationIcon from "../../../assets/educationIcon.png";
import techSkillsIcon from "../../../assets/techSkillsIcon.png";
import extraCurricularIcon from "../../../assets/extraCurricularIcon.png";
const ResumeDisplay = ({ displayStyles }, ref) => {
  const appContext = useContext(AppContext);
  return (
    <div className={displayStyles.mainDiv} ref={ref}>
      <div className="w-[70%] h-full flex flex-col bg-white p-3">
        <div className="w-full">
          <span className={`${displayStyles.userName}`}>
            {appContext.formState.userName}
          </span>
        </div>
        {/* Profile */}
        <div className={displayStyles.headingContainer}>
          <img
            src={userIcon}
            alt="user-icon"
            className={displayStyles.headingImgSize}
          />
          <span className={displayStyles.headings}>Profile</span>
        </div>
        {/* tagline */}
        <div>
          <span className={`${displayStyles.content}  font-normal`}>
            {appContext.formState.tagline}
          </span>
        </div>
        {/* Education Section (Heading-1) */}
        <div className={displayStyles.headingContainer}>
          <img
            src={educationIcon}
            alt="education-icon"
            className={displayStyles.headingImgSize}
          />
          <span className={`${displayStyles.headings}`}>
            {appContext.formState.resumeHeading1}
          </span>
        </div>
        {appContext.formState.userEducation.map((currElm, index) => {
          return (
            <div className={displayStyles.contentContainer} key={index}>
              <span className={`${displayStyles.content}`}>
                {`${currElm.degreeType} ${currElm.major} ${currElm.college}`}
              </span>
              <span className={`${displayStyles.minorContent}`}>
                {`${currElm.degreeStartDate}  ${currElm.degreeEndDate}`}
              </span>
            </div>
          );
        })}
        {/* Technical Skills Section */}
        <div className={displayStyles.headingContainer}>
          <img
            src={techSkillsIcon}
            alt="techSkills-icon"
            className={displayStyles.headingImgSize}
          />
          <span className={displayStyles.headings}>
            {appContext.formState.resumeHeading2}
          </span>
        </div>
        {appContext.formState.userTechnicalSkills.map((currSkill, index) => {
          return (
            <div className={displayStyles.contentContainer} key={index}>
              <span className={displayStyles.content}>
                {`${currSkill.skillName}`}
              </span>
              <span className={displayStyles.minorContent}>
                {`${currSkill.skillDetails}`}
              </span>
            </div>
          );
        })}
        {/* Extra Curriculum / Achievements Awards Section */}
        <div className={displayStyles.headingContainer}>
          <img
            src={extraCurricularIcon}
            alt="extraCurricularIcon"
            className={displayStyles.headingImgSize}
          />
          <span className={displayStyles.headings}>
            {appContext.formState.resumeHeading3}
          </span>
        </div>

        {appContext.formState.userExtraCurricular.map((currActivity, index) => {
          return (
            <div className={displayStyles.contentContainer} key={index}>
              <span className={displayStyles.content}>
                {`${currActivity.activityName}`}
              </span>
              <span className={displayStyles.minorContent}>
                {`${currActivity.activityDetails}`}
              </span>
            </div>
          );
        })}
      </div>
      {/* Right portion  */}
      <div className="w-[30%] h-full flex flex-col bg-white p-3">
        {/* deails Section */}
        <div className={displayStyles.rightSideDetailsDiv}>
          <span className={displayStyles.rightSideHeading}>Details</span>
          <span className={displayStyles.rightSideContent}>
            {appContext.formState.userPlaceName}
          </span>
          <span
            className={displayStyles.rightSideContent}
          >{`Distt. ${appContext.formState.userDistrict} ${appContext.formState.userState}`}</span>
          <span className={displayStyles.rightSideContent}>
            {appContext.formState.userPincode}
          </span>
          <span className={displayStyles.rightSideContent}>
            {appContext.formState.userCountry}
          </span>
          <span className={`${displayStyles.rightSideContent} font-light`}>
            {appContext.formState.userPhone}
          </span>
          <span className={`${displayStyles.rightSideContent} text-blue-400`}>
            {appContext.formState.userEmail}
          </span>
        </div>
        {/* DOB */}
        <div className="flex flex-col py-2">
          <span
            className={`${displayStyles.rightSideContent} font-semibold text-gray-700`}
          >
            Date of birth
          </span>
          <span
            className={displayStyles.rightSideContent}
          >{`${appContext.formState.userDOB_Day}/${appContext.formState.userDOB_Month}/${appContext.formState.userDOB_Year}`}</span>
        </div>
        {/* Social Links */}
        <div className="flex flex-col">
          <span className={displayStyles.rightSideHeading}>Links:</span>
          {appContext.formState.userSocialLinks.map((currLink, index) => {
            return (
              <a
                href={currLink.link}
                className={`${displayStyles.rightSideContent} font-semibold text-blue-400 hover:text-blue-600`}
                target="_blank"
                key={index}
              >
                {currLink.linkTitle}
              </a>
            );
          })}
        </div>
        {/* --------Skills ------ */}
        <div className="flex flex-col mt-3">
          <span className={displayStyles.rightSideHeading}>Skills:</span>
          {appContext.formState.userSkills.map((currSkill, index) => {
            return (
              <span
                className={`${displayStyles.rightSideContent} pb-[5px] px-[2px] border-b border-b-blue-400 `}
                key={index}
              >
                {currSkill}
              </span>
            );
          })}
        </div>
        {/* --------Hobbies ------ */}
        <div className="flex flex-col mt-3">
          <span className={displayStyles.rightSideHeading}>Hobbies:</span>
          {appContext.formState.userHobbies.map((currHobby, index) => {
            return (
              <span
                className={`${displayStyles.rightSideContent} py-[2px]`}
                key={index}
              >
                {currHobby}
              </span>
            );
          })}
        </div>
        {/* -------- Languages ------ */}
        <div className="flex flex-col mt-3">
          <span className={displayStyles.rightSideHeading}>
            Languages Known:
          </span>
          {appContext.formState.userLanguages.map((currLang, index) => {
            return (
              <span
                className={`${displayStyles.rightSideContent} pb-[4px] px-[2px] border-b border-b-blue-400 `}
                key={index}
              >
                {currLang}
              </span>
            );
          })}
        </div>
        {/* ------- */}
      </div>
    </div>
  );
};

export default forwardRef(ResumeDisplay);
