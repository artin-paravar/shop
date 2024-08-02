const url = `https://api-eu.cloudinary.com/v1_1/dxrmbwr8w/image/upload`;
export const uploadImage = async (image: any) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "mern_product");

  const dataResponse = await fetch(url, {
    method: "post",
    body: formData,
  });

  return dataResponse.json();
};
