import axiosInstance from "../../helpers/axios";

export const register = async () => {
  try {
    let res = await axiosInstance.post("/auth/register");
    let data = await res.data;
    console.log(data);
  } catch (err) {
    console.log("error: ", err);
  }
};
