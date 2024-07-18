import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Router/AuthProvider";
import axios from "axios";
import GoBack from "../../CommonRoute/GoBack";

const CashOut = () => {
  const { user, refetch } = useContext(AuthContext);

  const handleCashOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const pin = form.pin.value;
    const withdraw = form.balance.value;

    const balance = parseFloat(withdraw - (withdraw * 1.5) / 100);

    if (user.balance < balance) {
      return toast.error("Insufficient Balance");
    }

    const cashOut = { phone, balance, pin };

    axios
      .put(`https://scic-job-task-server-liard.vercel.app/cash-out/${user.phone}`, cashOut)
      .then((res) => {
        if (res.data) {
          refetch();
          return toast.success("Cash Out Successful!");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="w-4/5 mx-auto mt-10">
      <h4 className="text-center pb-5 font-semibold text-xl">Cash Out</h4>
      <form onSubmit={handleCashOut}>
        <Toaster position="top-center" reverseOrder={false} />

        <input type="number" name="phone" placeholder="Agent Phone No" className="p-2 w-full rounded-md text-gray-700 mb-5" required />
        <input type="number" name="balance" placeholder="Taka" className="p-2 w-full rounded-md text-gray-700" required />

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
          Cash Out
        </button>
      </form>

      <GoBack />
    </div>
  );
};

export default CashOut;
