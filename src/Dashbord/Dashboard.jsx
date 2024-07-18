import { useContext, useEffect, useState } from "react";
import Admin from "./Admin/Admin";
import Agent from "./Agent/Agent";
import User from "./User/User";
import { AuthContext } from "../Router/AuthProvider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, isLoading } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setRole(user?.role);
  }, [user]);

  if (isLoading) {
    return;
  }

  if (!user) {
    navigate("/");
  }

  return (
    <>
      {role === "user" && user?.status === "approve" && <User />}
      {role === "admin" && user?.status === "approve" && <Admin />}
      {role === "agent" && user?.status === "approve" && <Agent />}
    </>
  );
};

export default Dashboard;
