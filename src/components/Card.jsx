const Card = ({id, image, price, description, title,discount}) => {    
  return (
    <>
      <img src={image} alt="sadf" />
      <h3>{title}: {id}</h3>
      <p> {description} </p>
      <p>{price}
        {discount>0? <span style={{color:"red"}}>-{discount}</span>:""}
      </p>
    </>
  );
};

export default Card;
