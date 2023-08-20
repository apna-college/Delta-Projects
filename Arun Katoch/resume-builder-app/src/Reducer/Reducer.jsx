export const reducer = (state, action) => {
  switch (action.type) {
    case "NAME_CHANGE":
      return {
        ...state,
        userName: action.value,
      };
    case "TAGLINE_CHANGE":
      return {
        ...state,
        tagline: action.value,
      };
    case "AVILIABLE_TAGLINES":
      return {
        ...state,
        tagline: action.value,
      };
    case "EMAIL_CHANGE":
      return {
        ...state,
        userEmail: action.value,
      };
    case "USER_PHONE_CHANGE":
      return {
        ...state,
        userPhone: action.value,
      };
    case "DATE_CHANGE":
      return {
        ...state,
        userDOB_Day: action.value,
      };
    case "MONTH_CHANGE":
      return {
        ...state,
        userDOB_Month: action.value,
      };
    case "YEAR_CHANGE":
      return {
        ...state,
        userDOB_Year: action.value,
      };
    case "PLACE_CHANGE":
      return {
        ...state,
        userPlaceName: action.value,
      };
    case "DISTRICT_CHANGE":
      return {
        ...state,
        userDistrict: action.value,
      };
    case "STATE_CHANGE":
      return {
        ...state,
        userState: action.value,
      };
    case "COUNTRY_CHANGE":
      return {
        ...state,
        userCountry: action.value,
      };
    case "PINCODE_CHANGE":
      return {
        ...state,
        userPincode: action.value,
      };
    case "LINK_TITLE_1_CHANGE":
      return {
        ...state,
        userSocialLinks: [
          { ...state.userSocialLinks[0], linkTitle: action.value },
          { ...state.userSocialLinks[1] },
          { ...state.userSocialLinks[2] },
        ],
      };
    case "LINK_1_CHANGE":
      return {
        ...state,
        userSocialLinks: [
          { ...state.userSocialLinks[0], link: action.value },
          { ...state.userSocialLinks[1] },
          { ...state.userSocialLinks[2] },
        ],
      };
    case "LINK_TITLE_2_CHANGE":
      return {
        ...state,
        userSocialLinks: [
          { ...state.userSocialLinks[0] },
          { ...state.userSocialLinks[1], linkTitle: action.value },
          { ...state.userSocialLinks[2] },
        ],
      };
    case "LINK_2_CHANGE":
      return {
        ...state,
        userSocialLinks: [
          { ...state.userSocialLinks[0] },
          { ...state.userSocialLinks[1], link: action.value },
          { ...state.userSocialLinks[2] },
        ],
      };
    case "LINK_TITLE_3_CHANGE":
      return {
        ...state,
        userSocialLinks: [
          { ...state.userSocialLinks[0] },
          { ...state.userSocialLinks[1] },
          { ...state.userSocialLinks[2], linkTitle: action.value },
        ],
      };
    case "LINK_3_CHANGE":
      return {
        ...state,
        userSocialLinks: [
          { ...state.userSocialLinks[0] },
          { ...state.userSocialLinks[1] },
          { ...state.userSocialLinks[2], link: action.value },
        ],
      };
    case "INPUT_SKILLS":
      return {
        ...state,
        inputSkills: action.value,
      };
    case "ADD_SKILLS":
      if (state.inputSkills !== "") {
        return {
          ...state,
          userSkills: [...state.userSkills, state.inputSkills],
          inputSkills: "",
        };
      } else if (state.inputSkills === "") {
        return {
          ...state,
        };
      }
    case "DELETE_SKILLS":
      if (state.inputSkills !== "") {
        return {
          ...state,
          userSkills: state.userSkills.filter(
            (currElm) => currElm != state.inputSkills
          ),
          inputSkills: "",
        };
      } else if (state.inputSkills === "") {
        return {
          ...state,
        };
      }
    case "INPUT_HOBBIES":
      return {
        ...state,
        inputHobbies: action.value,
      };
    case "ADD_HOBBY":
      if (state.inputHobbies !== "") {
        return {
          ...state,
          userHobbies: [...state.userHobbies, state.inputHobbies],
          inputHobbies: "",
        };
      } else if (state.inputHobbies === "") {
        return {
          ...state,
        };
      }
    case "DELETE_HOBBY":
      if (state.inputHobbies !== "") {
        return {
          ...state,
          userHobbies: state.userHobbies.filter(
            (currElm) => currElm != state.inputHobbies
          ),
          inputHobbies: "",
        };
      } else if (state.inputHobbies === "") {
        return {
          ...state,
        };
      }
    case "INPUT_LANGUAGE":
      return {
        ...state,
        inputLanguage: action.value,
      };
    case "ADD_LANGUAGE":
      if (state.inputLanguage !== "") {
        return {
          ...state,
          userLanguages: [...state.userLanguages, state.inputLanguage],
          inputLanguage: "",
        };
      } else if (state.inputLanguage === "") {
        return {
          ...state,
        };
      }
    case "DELETE_LANGUAGE":
      if (state.inputLanguage !== "") {
        return {
          ...state,
          userLanguages: state.userLanguages.filter(
            (currElm) => currElm !== state.inputLanguage
          ),
          inputLanguage: "",
        };
      } else if (state.inputLanguage === "") {
        return {
          ...state,
        };
      }
    case "RESUME_HEADING_1_CHANGE":
      return {
        ...state,
        resumeHeading1: action.value,
      };
    case "RESUME_HEADING_2_CHANGE":
      return {
        ...state,
        resumeHeading2: action.value,
      };
    case "RESUME_HEADING_3_CHANGE":
      return {
        ...state,
        resumeHeading3: action.value,
      };
    case "DEGREE_CHANGE":
      return {
        ...state,
        userEducation: [
          {
            ...state.userEducation[0],
            degreeType: action.value,
          },
          { ...state.userEducation[1] },
          { ...state.userEducation[2] },
        ],
      };
    case "MAJOR_CHANGE":
      return {
        ...state,
        userEducation: [
          {
            ...state.userEducation[0],
            major: action.value,
          },
          { ...state.userEducation[1] },
          { ...state.userEducation[2] },
        ],
      };
    case "COLLEGE_CHANGE":
      return {
        ...state,
        userEducation: [
          {
            ...state.userEducation[0],
            college: action.value,
          },
          { ...state.userEducation[1] },
          { ...state.userEducation[2] },
        ],
      };
    case "DEGREE_START_DATE_CHANGE":
      return {
        ...state,
        userEducation: [
          {
            ...state.userEducation[0],
            degreeStartDate: action.value,
          },
          { ...state.userEducation[1] },
          { ...state.userEducation[2] },
        ],
      };
    case "DEGREE_END_DATE_CHANGE":
      return {
        ...state,
        userEducation: [
          {
            ...state.userEducation[0],
            degreeEndDate: action.value,
          },
          { ...state.userEducation[1] },
          { ...state.userEducation[2] },
        ],
      };
    case "ANOTHER_QUAL_1_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          {
            ...state.userEducation[1],
            degreeType: action.value,
          },
          { ...state.userEducation[2] },
        ],
      };
    case "ANOTHER_QUAL_1_MAJOR_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          {
            ...state.userEducation[1],
            major: action.value,
          },
          { ...state.userEducation[2] },
        ],
      };
    case "ANOTHER_QUAL_1_COLLEGE_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          {
            ...state.userEducation[1],
            college: action.value,
          },
          { ...state.userEducation[2] },
        ],
      };
    case "ANOTHER_QUAL_1_START_DATE_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          {
            ...state.userEducation[1],
            degreeStartDate: action.value,
          },
          { ...state.userEducation[2] },
        ],
      };
    case "ANOTHER_QUAL_1_END_DATE_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          {
            ...state.userEducation[1],
            degreeEndDate: action.value,
          },
          { ...state.userEducation[2] },
        ],
      };
    case "ANOTHER_QUAL_2_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          { ...state.userEducation[1] },
          {
            ...state.userEducation[2],
            degreeType: action.value,
          },
        ],
      };
    case "ANOTHER_QUAL_2_MAJOR_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          { ...state.userEducation[1] },
          {
            ...state.userEducation[2],
            major: action.value,
          },
        ],
      };
    case "ANOTHER_QUAL_2_COLLEGE_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          { ...state.userEducation[1] },
          {
            ...state.userEducation[2],
            college: action.value,
          },
        ],
      };
    case "ANOTHER_QUAL_2_START_DATE_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          { ...state.userEducation[1] },
          {
            ...state.userEducation[2],
            degreeStartDate: action.value,
          },
        ],
      };
    case "ANOTHER_QUAL_2_END_DATE_CHANGE":
      return {
        ...state,
        userEducation: [
          { ...state.userEducation[0] },
          { ...state.userEducation[1] },
          {
            ...state.userEducation[2],
            degreeEndDate: action.value,
          },
        ],
      };
    case "TECHNICAL_SKILL_1":
      return {
        ...state,
        userTechnicalSkills: [
          { ...state.userTechnicalSkills[0], skillName: action.value },
          { ...state.userTechnicalSkills[1] },
          { ...state.userTechnicalSkills[2] },
        ],
      };
    case "TECHNICAL_SKILL_1_DETAILS":
      return {
        ...state,
        userTechnicalSkills: [
          { ...state.userTechnicalSkills[0], skillDetails: action.value },
          { ...state.userTechnicalSkills[1] },
          { ...state.userTechnicalSkills[2] },
        ],
      };
    case "TECHNICAL_SKILL_2":
      return {
        ...state,
        userTechnicalSkills: [
          { ...state.userTechnicalSkills[0] },
          { ...state.userTechnicalSkills[1], skillName: action.value },
          { ...state.userTechnicalSkills[2] },
        ],
      };
    case "TECHNICAL_SKILL_2_DETAILS":
      return {
        ...state,
        userTechnicalSkills: [
          { ...state.userTechnicalSkills[0] },
          { ...state.userTechnicalSkills[1], skillDetails: action.value },
          { ...state.userTechnicalSkills[2] },
        ],
      };
    case "TECHNICAL_SKILL_3":
      return {
        ...state,
        userTechnicalSkills: [
          { ...state.userTechnicalSkills[0] },
          { ...state.userTechnicalSkills[1] },
          { ...state.userTechnicalSkills[2], skillName: action.value },
        ],
      };
    case "TECHNICAL_SKILL_3_DETAILS":
      return {
        ...state,
        userTechnicalSkills: [
          { ...state.userTechnicalSkills[0] },
          { ...state.userTechnicalSkills[1] },
          { ...state.userTechnicalSkills[2], skillDetails: action.value },
        ],
      };
    case "EXTRA_ACTIVITY_1":
      return {
        ...state,
        userExtraCurricular: [
          { ...state.userExtraCurricular[0], activityName: action.value },
          { ...state.userExtraCurricular[1] },
          { ...state.userExtraCurricular[2] },
        ],
      };
    case "EXTRA_ACTIVITY_1_DETAILS":
      return {
        ...state,
        userExtraCurricular: [
          { ...state.userExtraCurricular[0], activityDetails: action.value },
          { ...state.userExtraCurricular[1] },
          { ...state.userExtraCurricular[2] },
        ],
      };
    case "EXTRA_ACTIVITY_2":
      return {
        ...state,
        userExtraCurricular: [
          { ...state.userExtraCurricular[0] },
          { ...state.userExtraCurricular[1], activityName: action.value },
          { ...state.userExtraCurricular[2] },
        ],
      };
    case "EXTRA_ACTIVITY_2_DETAILS":
      return {
        ...state,
        userExtraCurricular: [
          { ...state.userExtraCurricular[0] },
          { ...state.userExtraCurricular[1], activityDetails: action.value },
          { ...state.userExtraCurricular[2] },
        ],
      };
    case "EXTRA_ACTIVITY_3":
      return {
        ...state,
        userExtraCurricular: [
          { ...state.userExtraCurricular[0] },
          { ...state.userExtraCurricular[1] },
          { ...state.userExtraCurricular[2], activityName: action.value },
        ],
      };
    case "EXTRA_ACTIVITY_3_DETAILS":
      return {
        ...state,
        userExtraCurricular: [
          { ...state.userExtraCurricular[0] },
          { ...state.userExtraCurricular[1] },
          { ...state.userExtraCurricular[2], activityDetails: action.value },
        ],
      };
    case "SHOW_ADDRESS_ACCORDION":
      return {
        ...state,
        addressAccordion: action.payload,
        addDetailsAccordion: "hide",
        linksAccordion: "hide",
        skillsAccordion: "hide",
        hobbiesAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "HIDE_ADDRESS_ACCORDION":
      return {
        ...state,
        addressAccordion: action.payload,
        addDetailsAccordion: "hide",
        linksAccordion: "hide",
        skillsAccordion: "hide",
        hobbiesAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "SHOW_ADDDETAILS_ACCORDION":
      return {
        ...state,
        addDetailsAccordion: action.payload,
        addressAccordion: "hide",
        linksAccordion: "hide",
        skillsAccordion: "hide",
        hobbiesAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "HIDE_ADDDETAILS_ACCORDION":
      return {
        ...state,
        addDetailsAccordion: action.payload,
        addressAccordion: "hide",
        linksAccordion: "hide",
        skillsAccordion: "hide",
        hobbiesAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "SHOW_LINKS_ACCORDION":
      return {
        ...state,
        linksAccordion: action.payload,
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        skillsAccordion: "hide",
        hobbiesAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "HIDE_LINKS_ACCORDION":
      return {
        ...state,
        linksAccordion: action.payload,
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        skillsAccordion: "hide",
        hobbiesAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "SHOW_SKILLS_ACCORDION":
      return {
        ...state,
        skillsAccordion: action.payload,
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        hobbiesAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "HIDE_SKILLS_ACCORDION":
      return {
        ...state,
        skillsAccordion: action.payload,
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        hobbiesAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "SHOW_HOBBIES_ACCORDION":
      return {
        ...state,
        hobbiesAccordion: action.payload,
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "HIDE_HOBBIES_ACCORDION":
      return {
        ...state,
        hobbiesAccordion: action.payload,
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        languagesAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "SHOW_LANGUAGES_ACCORDION":
      return {
        ...state,
        languagesAccordion: action.payload,
        hobbiesAccordion: "hide",
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "HIDE_LANGUAGES_ACCORDION":
      return {
        ...state,
        languagesAccordion: action.payload,
        hobbiesAccordion: "hide",
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        sectionOneAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "SHOW_SECTION_ONE_ACCORDION":
      return {
        ...state,
        sectionOneAccordion: action.payload,
        languagesAccordion: "hide",
        hobbiesAccordion: "hide",
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "HIDE_SECTION_ONE_ACCORDION":
      return {
        ...state,
        sectionOneAccordion: action.payload,
        languagesAccordion: "hide",
        hobbiesAccordion: "hide",
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        sectionTwoAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "SHOW_SECTION_TWO_ACCORDION":
      return {
        ...state,
        sectionTwoAccordion: action.payload,
        sectionOneAccordion: "hide",
        languagesAccordion: "hide",
        hobbiesAccordion: "hide",
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "HIDE_SECTION_TWO_ACCORDION":
      return {
        ...state,
        sectionTwoAccordion: action.payload,
        sectionOneAccordion: "hide",
        languagesAccordion: "hide",
        hobbiesAccordion: "hide",
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
        sectionThreeAccordion: "hide",
      };
    case "SHOW_SECTION_THREE_ACCORDION":
      return {
        ...state,
        sectionThreeAccordion: action.payload,
        sectionTwoAccordion: "hide",
        sectionOneAccordion: "hide",
        languagesAccordion: "hide",
        hobbiesAccordion: "hide",
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
      };
    case "HIDE_SECTION_THREE_ACCORDION":
      return {
        ...state,
        sectionThreeAccordion: action.payload,
        sectionTwoAccordion: "hide",
        sectionOneAccordion: "hide",
        languagesAccordion: "hide",
        hobbiesAccordion: "hide",
        skillsAccordion: "hide",
        linksAccordion: "hide",
        addDetailsAccordion: "hide",
        addressAccordion: "hide",
      };
    default:
      return { state };
  }
};
