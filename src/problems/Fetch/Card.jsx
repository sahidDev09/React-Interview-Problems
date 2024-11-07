/* eslint-disable react/prop-types */

const Card = ({ photos }) => {
  return (
    <div className="bg-slate-300 p-3 rounded-md hover:bg-slate-400 hover:scale-105 transition-all">
      <p className=" text-2xl font-black text-green-600">{photos.id}</p>
      <h1 className=" text-lg font-semibold">{photos.title}</h1>
      <h4 className=" text-sm text-gray-500">{photos.body}</h4>
    </div>
  );
};

export default Card;
