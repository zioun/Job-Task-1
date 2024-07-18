/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const {
    data: user,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const getUser = localStorage.getItem("user");
      const res = await axios.get(`https://scic-job-task-server-liard.vercel.app/users/${getUser}`);
      const data = res.data;

      return data;
    },
  });

  const info = { user, refetch, isLoading };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
