import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { refetch, user } = useContext(AuthContext);

  const navigate = useNavigate();

  if (user) {
    navigate("/dashboard");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const number = form.number.value;
    const pin = form.pin.value;

    axios
      .get(`https://scic-job-task-server-liard.vercel.app/user?phone=${number}&pin=${pin}`)
      .then((res) => {
        if (res.data.message === "User Not Found") {
          return toast.error("User Not Found!");
        }

        if (res.data.status === "pending") {
          return toast.error("Your Account is Pending!");
        }
        toast.success("Successfully logged in!");
        // setUser(res.data);
        localStorage.setItem("user", res.data._id);
        refetch();
        navigate("/dashboard");
      })
      .catch(() => toast.error("User Not Found!"));
  };

  return (
    <div className="">
      <div className=" flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white bg-opacity-30 shadow">
            <h2 className="text-center text-2xl font-bold">Sign in</h2>
            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <Toaster position="top-center" reverseOrder={false} />
              {/* Phone Number */}
              <div>
                <label className=" text-sm mb-2 block">Phone no</label>
                <div className="relative flex items-center">
                  <input
                    name="number"
                    type="number"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#E2126D]"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>

              {/* Pin Number */}
              <div>
                <label className=" text-sm mb-2 block">Pin Number</label>
                <div className="relative flex items-center">
                  <input
                    name="pin"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#E2126D]"
                    placeholder="Enter PIN"
                  />
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg  bg-white bg-opacity-10 hover:bg-gray-100 hover:bg-opacity-20 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className=" text-sm !mt-8 text-center">
                Do not have an account?{" "}
                <Link to={"/register"} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
