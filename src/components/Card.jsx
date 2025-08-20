import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Card = ({
  image = "https://placehold.co/600x400",
  price="27",
  description="asdfasfd",
  title="asdfasdfa",
}) => {

  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
console.log(rating);

  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };

  return (
    <div className="w-full border-1 border-[#D1D1D1] p-4 rounded-xl">
      <div className="flex justify-center items-center">
        <img
          className="h-[180px] object-cover text-center rounded-[10px] shadow-[0_0px_10px_rgba(0,0,0,0.684)]"
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
      <div className="star__svg-horizontal">
        <Rating onClick={handleRating} initialValue={rating} size={20} />
      </div>

      <button onClick={handleReset}>reset</button>

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
