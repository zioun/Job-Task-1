import logo from "../assets/plane (1).png";

const Header = () => {
  return (
    <div className="text-center">
      <div className=" border-2 py-2 rounded-lg border-white border-opacity-30 ">
        <div className="flex justify-center items-center gap-3">
          <div className="w-10">
            <img src={logo} alt="logo" />
          </div>
          <h2 className="text-2xl font-bold uppercase ">Biman</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
