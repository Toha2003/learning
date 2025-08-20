const Card = ({ image, price, description, title }) => {
  return (
    <div className="w-full border-1 border-[#D1D1D1] p-4 rounded-xl flex flex-col justify-between">
      <div className="flex justify-center items-center">
        <img
          className="h-[180px] object-cover text-center rounded-[10px]"
          src={image}
          alt="sadf"
        />
      </div>
      <h3
        title={title}
        className="line-clamp-1 font-medium text-[15px] leading-[100%] mt-4 "
      >
        {title}
      </h3>
      <p className="font-normal text-xs leading-[100%] line-clamp-5 py-2.5">
        {description}
      </p>
      <div className="flex justify-between items-center mt-4">
        <p>
          Price: <span className="text-red-600">{price}$ </span>
        </p>
        <button className="w-[90px] h-[36px] bg-[#6A953C] text-white border-2 border-[#46760A] rounded-xl cursor-pointer ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
