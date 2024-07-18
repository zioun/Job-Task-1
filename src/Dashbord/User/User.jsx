import wallet from "../../assets/wallet.png";
import send from "../../assets/send.png";
import cashout from "../../assets/takeover.png";
import history from "../../assets/history-book.png";
import cashIn from "../../assets/cash-flow.png";
import Card from "../../CommonRoute/Card";
import { Link } from "react-router-dom";
import Logout from "../../CommonRoute/Logout";

const User = () => {
  return (
    <>
      {/* card */}
      <section className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10 ">
        {/* Balance */}
        <Link to={"/balance"}>
          <Card img={wallet} title={"Balance"} />
        </Link>

        {/* send Money */}
        <Link to={"/send-money"}>
          <Card img={send} title={"send money"} />
        </Link>

        {/* Cash Out */}
        <Link to={"/cash-out"}>
          <Card img={cashout} title={"Cash out"} />
        </Link>

        {/* Cash in */}
        <Link to={"/cash-in"}>
          <Card img={cashIn} title={"cash in"} />
        </Link>

        {/* History */}
        <div className="col-span-2">
          <Link to={"/user-history"}>
            <Card img={history} title={"History"} />
          </Link>
        </div>

        {/* Log out Button */}
        <Logout />
      </section>
    </>
  );
};

export default User;
