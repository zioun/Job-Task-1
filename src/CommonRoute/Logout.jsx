import { useNavigate } from "react-router-dom";
import logout from "../assets/logOut.png";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div
      onClick={handleLogout}
      className="fixed bottom-5 left-[50%] -translate-x-[50%] bg-transparent shadow-md shadow-white border-t border-white border-opacity-20 rounded-full p-3 w-16"
    >
      <img src={logout} alt="" />
    </div>
  );
};

export default Logout;
