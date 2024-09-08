export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const contact = Object.fromEntries(res);
    // console.log(contact);
    return contact;
  } catch (error) {
    console.log(error);
  }
};
