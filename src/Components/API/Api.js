import axios from "axios";

const API = axios.create({
    baseURL: "https://aspire0.herokuapp.com",
  });


export const FetchPropertyData = () => API.get(`/prop/getAllProperty`);