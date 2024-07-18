import Card from "../../CommonRoute/Card";
import transaction from "../../assets/transaction.png";
import history from "../../assets/blnc-inquery.png";
import balance from "../../assets/wallet.png";
import Logout from "../../CommonRoute/Logout";
import { Link } from "react-router-dom";

const Agent = () => {
  return (
    <section className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10 ">
      <Link to={"/balance"}>
        <Card img={balance} title={"Balance Enquiry"} />
      </Link>

      <Card img={transaction} title={"Transaction Management"} />

      <Link to={"/agent-history"}>
        <Card img={history} title={"Transactions History"} />
      </Link>

      {/* Log out */}
      <Logout />
    </section>
  );
};

export default Agent;
