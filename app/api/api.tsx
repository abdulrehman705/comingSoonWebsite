import axios from "axios";

export const getUsers = async () => {
  console.log("yeelleel")
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
    console.log("responseresponse", response);

  // Select only the first 4 users
  return response.data.slice(0, 4);
};
