import axios from "axios";

const API = axios.create({
    baseURL: "https://aspire0.herokuapp.com",
  });


export const FetchPropertyData = () => API.get(`/prop/getAllProperty`);
export const FetchSinglePropertyData = (id) => API.post(`/prop/getPropertyById`,id);
export const PostGetintouchData = (data) => API.post(`/cn/addContacts`,data);

export const FetchCategoryBlog = (data) => API.post(`/blog/getBlogsByCategory`,data);
export const FetchSingleBlog = (data) => API.post(`/blog/getBlogById`,data);

