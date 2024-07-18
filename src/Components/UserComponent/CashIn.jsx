import axios from "axios";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Router/AuthProvider";
import GoBack from "../../CommonRoute/GoBack";

const CashIn = () => {
  const { user, refetch } = useContext(AuthContext);
  const handleCashIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const agentNumber = form.phone.value;
    const requestBalance = form.balance.value;
    const pin = form.pin.value;

    const cashIn = { agentNumber, requestBalance, pin };

    axios
      .put(`https://scic-job-task-server-liard.vercel.app/cash-in/${user.phone}`, cashIn)
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          refetch();
          return toast.success("Cash In Request Successful!");
        }
      })
      .catch((err) => {
        return toast.error(err.response.data.message);
      });
  };

  return (
    <div className="w-4/5 mx-auto mt-10">
      <h4 className="text-center pb-5 font-semibold text-xl">Cash In</h4>
      <form onSubmit={handleCashIn}>
        <Toaster position="top-center" reverseOrder={false} />

        <input type="number" name="phone" placeholder="Agent Phone No" className="p-2 w-full rounded-md text-gray-700 mb-5" required />

        <input type="number" name="balance" placeholder="Request Taka" className="p-2 w-full rounded-md text-gray-700" required />

        <input type="password" name="pin" placeholder="pin" className="p-2 w-full rounded-md text-gray-700 mt-5" required />
        {/* <input
  type="number"
  value={fee}
  name="balance"
  placeholder="Fee"
  className="p-2 w-full bg-white rounded-md text-gray-700 mt-5"
  disabled
/> */}

        <button type="submit" className="p-2 bg-white bg-opacity-70 font-semibold w-full mt-5 rounded-md text-[#E2126D]">
          Cash in
        </button>
      </form>

      <GoBack />
    </div>
  );
};

export default CashIn;
