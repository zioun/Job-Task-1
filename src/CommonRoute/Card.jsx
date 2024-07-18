/* eslint-disable react/prop-types */
const Card = ({ img, title }) => {
  return (
    <div className="bg-white w-36 h-34 p-3 flex justify-center items-center bg-opacity-30 mx-auto rounded-xl shadow-md shadow-white ">
      <div className="space-y-2">
        <div className="w-1/2 mx-auto">
          <img src={img} alt="" />
        </div>
        <h3 className="uppercase text-center font-semibold ">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
