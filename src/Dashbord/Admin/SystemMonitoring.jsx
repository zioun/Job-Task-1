import { useEffect, useState } from "react";
import GoBack from "../../CommonRoute/GoBack";
// import { AuthContext } from "../../Router/AuthProvider";
import axios from "axios";

const SystemMonitoring = () => {
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    axios
      .get("https://scic-job-task-server-liard.vercel.app/users")
      .then((res) => {
        const allTr = res.data.map((tr) => tr.transaction);
        const oneArr = allTr.flat();

        const reverse = [...oneArr].reverse();

        const undefineFiltered = reverse.filter((vl) => vl !== undefined);

        setTransaction(undefineFiltered);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // console.log(transaction);

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
            {transaction?.map((tr, index) => (
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

export default SystemMonitoring;
