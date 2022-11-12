import axios from "axios";

const API = axios.create({
    baseURL: "https://aspire0.herokuapp.com",
  });


export const FetchPropertyData = () => API.get(`/prop/getAllProperty`);
export const PostApplicationForm = (data) => API.post(`/cr/apply`,data);
export const FetchSinglePropertyData = (id) => API.post(`/prop/getPropertyById`,id);
export const FetchSingleDeveloperData = (id) => API.post(`/dev/getDeveloperById`,id);
export const FetchCategoryBlog = (data) => API.post(`/blog/getBlogsByCategory`,data);
export const FetchSingleBlog = (data) => API.post(`/blog/getBlogById`,data);
export const FetchTrendingLoans = () => API.get(`/ln/getAllLoan`);
export const FetchProjectImage = () => API.get(`/proj/getAllProject`);
export const FetchSingleCareer = (data) => API.post(`/cr/getCareerById`,data);

export const PostrequirementData = (data) => API.post(`/prop/addRequirement`,data);
export const PostEligilityData = (data) => API.post(`/ln/addEligibility`,data);
export const PostGetintouchData = (data) => API.post(`/cn/addContacts`,data);
export const PostTalkToExpertData = (data) => API.post(`cn/addExpert`,data);
