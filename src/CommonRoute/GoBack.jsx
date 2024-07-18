import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <div className="text-center">
      <Link className="py-2 px-4 rounded-md border-2 mt-10 inline-block border-white border-opacity-40 " to={"/dashboard"}>
        {" "}
        Go Back
      </Link>
    </div>
  );
};

export default GoBack;
