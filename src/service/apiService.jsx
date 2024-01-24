import axios from "axios";

export const baseUrl = "https://crudcrud.com/api/37bceb95d4b5420fb0a1b8024be29926";

const createUser = async (fullname, age) => {
  return await axios.post(baseUrl + "/users", {
    fullname,
    age,
  });
};

const login = (formdata) => {
  let response = {};
  if (formdata.username ==='admin' && formdata.password === '12345') {
    response =  {status:true,'username':formdata.username,"password":formdata.password};
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }else{
    response = {status:false};
    return response;
  }
};

const logout = () => {
    localStorage.removeItem("user");
    return {status:true};
};

export default {
  baseUrl,
  createUser,
  login,
  logout,
};