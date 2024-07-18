import Card from "../../CommonRoute/Card";
import userManagement from "../../assets/userManagement.png";
import system from "../../assets/system-monitoring.png";
import { Link } from "react-router-dom";
import Logout from "../../CommonRoute/Logout";

const Admin = () => {
  return (
    <section className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10 ">
      <Link to={"/user-management"}>
        <Card img={userManagement} title={"User Management"} />
      </Link>

      <Link to={"/monitoring"}>
        <Card img={system} title={"System Monitoring"} />
      </Link>

      {/* Log Out */}
      <Logout />
    </section>
  );
};

export default Admin;
