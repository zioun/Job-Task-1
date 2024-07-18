import { useContext, useEffect, useState } from "react";
import GoBack from "../../CommonRoute/GoBack";
import { AuthContext } from "../../Router/AuthProvider";

const AgentHistory = () => {
  const { user, isLoading } = useContext(AuthContext);
  const [sliceTransaction, setSliceTransaction] = useState([]);

  useEffect(() => {
    if (user) {
      const transactions = [...user.transaction].reverse();
      if (user?.transaction.length > 20) {
        setSliceTransaction(transactions.slice(0, 10));
      } else {
        setSliceTransaction(transactions);
      }
    }
  }, [user]);

  if (isLoading) {
    return;
  }

  if (!sliceTransaction) {
    return (
      <div className="text-xl font-bold uppercase h-[calc(100vh-100px)] flex justify-center items-center">No Transaction History Found</div>
    );
  }

  return (
    <div className="mt-10">
      <h4 className="text-center pb-5 font-semibold text-xl">History</h4>
      <div className="overflow-x-auto">
        <table className="w-full border text-center border-white border-opacity-30">
          <thead>
            <tr>
              <th className="py-2">Time</th>
              <th>Trx No</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sliceTransaction?.map((tr, index) => (
              <tr key={index} className="border-t border-white border-opacity-20">
                <td className="py-2">{tr?.time}</td>
                <td>{tr?.transactionNo}</td>
                <td>{tr?.transactionBalance}</td>
                <td>{tr?.requestStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <GoBack />
    </div>
  );
};

export default AgentHistory;
