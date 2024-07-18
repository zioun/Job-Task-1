import { useContext } from "react";
import { AuthContext } from "./../../Router/AuthProvider";
import GoBack from "../../CommonRoute/GoBack";

const BalanceDetails = () => {
  const { user } = useContext(AuthContext);

  if (user?.role === "admin") {
    return;
  }
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-around ">
      <h3 className="text-2xl font-semibold text-center">
        <span className="text-3xl">Balance:</span> <br /> {user?.balance} Taka
      </h3>

      <GoBack />
    </div>
  );
};

export default BalanceDetails;
