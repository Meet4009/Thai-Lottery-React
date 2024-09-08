import { getUserData } from "../API/lottery";

export const userApiData = async () => {
  try {
    const res = await getUserData();
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    console.error("Error Message :- ", error.message);
    console.error("Error Status :- ", error.response.status);
    console.error("Error Message :- ", error.response.data);
  }
};
