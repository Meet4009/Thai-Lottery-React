export const GetSingleUserDetails = async ({ params }) => {
  //   console.log(params);
  const id = params.id;

  try {
    const response = await fetch(
      `https://thailottery.onrender.com/api/admin/user/${id}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
