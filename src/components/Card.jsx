const Card = ({ id, image, price, description, title, buy }) => {
  return (
    <div className="h-[323px] w-full border-1 border-[#D1D1D1] p-4 rounded-xl">
      <img className="w-full h-[180px] object-cover text-center" src={image} alt="sadf" />
      <h3 className=" font-medium text-[15px] leading-[100%] mt-4 ">
        {title}: {id}
      </h3>
      <p className="font-normal text-xs leading-[100%] "> {description} </p>
      <div className=" flex justify-between items-center mt-4">
        <p>{price}$</p>
        <button className="w-[90px] h-[36px] bg-[#6A953C] text-white border-2 border-[#46760A] rounded-xl cursor-pointer ">{buy}</button>
      </div>
    </div>
  );
};

export default Card;
