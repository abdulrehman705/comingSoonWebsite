import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/api";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["Users"],
    queryFn: () => getUsers(),
  });
};
