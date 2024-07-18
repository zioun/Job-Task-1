import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Router/AuthProvider";
import { useNavigate } from "react-router-dom";
import GoBack from "../../CommonRoute/GoBack";

const UserManagement = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://scic-job-task-server-liard.vercel.app/users")
      .then((res) => {
        const filterData = res.data.filter((d) => d.role !== "admin");
        setAllUser(filterData);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (user?.role !== "admin") {
    navigate("/");
  }

  const handleChange = (e, id) => {
    const status = e.target.value;
    const data = { status };

    axios
      .put(`https://scic-job-task-server-liard.vercel.app/users/status/${id}`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border border-white border-opacity-30">
        <thead>
          <tr>
            <th className="text-start py-2">Name</th>
            <th className="text-start py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((u) => (
            <tr key={u.phone} className="border-t border-white border-opacity-30 ">
              <td className="text-start py-2">{u.name}</td>
              <td className="text-start py-2">
                <select onChange={(e) => handleChange(e, u._id)} className="bg-transparent border-none outline-none" id="">
                  <option className=" bg-[#E2126D] " value="">
                    {u.status}
                  </option>
                  <option className=" bg-[#E2126D] " value="approve">
                    Approve
                  </option>
                  <option className=" bg-[#E2126D] " value="block">
                    block
                  </option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <GoBack />
    </div>
  );
};

export default UserManagement;
