export const api = {
  vacancy: {
    vacancies: "/vacancies",
    search: "/vacancies/search",
    upload: "/vacancies/upload",
  },
  users: {
    users: "/users",
    me: "/users/me",
    refresh: "/users/refresh",
    signIn: "/users/signin",
    signUp: "/users/signup",
  },
  resume: {
    resumes: "/resumes",
    downloadFile: "/resumes/downloadFile",
    getCurrentUser: "/resumes/my",
  search: "/resumes/search",
    upload: "/resumes/upload",
    uploadFile: "/resumes/uploadFile",
  },
  dictionary: {
    getCities: "/dictionary/cities",
    getCountries: "/dictionary/countries",
    getExperienceLevels: "/dictionary/experience-levels",
    getJobCategories: "/dictionary/job-categories",
    getJobSkillTags: "/dictionary/job-skill-tags",
    getJobTypes: "/dictionary/job-types",
  },
};
