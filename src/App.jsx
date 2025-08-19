import { useEffect } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const getProduct = async ()=>{
    try{
     const data = await axios('https://api.escuelajs.co/api/v1/products')
     console.log(data);
     
    } catch(error){
      alert("Error fetching data: " + error.message);
    }
  }

  useEffect(()=>{
    getProduct()
  },[])

  const dinamikData = [
    {
      id: 1,
      price: 200,
      title: "Product title",
      description: "This is the first card",
      image: "https://picsum.photos/200/300",
      buy:"Buy Now",
    },
    {
      id: 2,
      price: 250,
      title: "Card 2",
      description: "This is the second card",
      image: "https://picsum.photos/200/300?2",
      buy:"Buy Now",
    },
    {
      id: 3,
      price: 250,
      title: "Card 3",
      description: "This is the three card",
      image: "https://picsum.photos/200/300?3",
      buy:"Buy Now",
    },
    {
      id: 4,
      price: 100,
      title: "Card 4",
      description: "This is the four card",
      image: "https://picsum.photos/200/300?4",
      buy:"Buy Now",
    },
    {
      id: 4,
      price: 100,
      title: "Card 4",
      description: "This is the four card",
      image: "https://picsum.photos/200/300?4",
      buy:"Buy Now",
    },
  ];

  return (
    <div className="container mx-auto">
      <div>
        <Navbar />
      </div>
      <div className=" grid grid-cols-5 gap-5 pt-15">
        {dinamikData.map(({ id, price, title, description, image, buy }) => (
          <Card
            id={id}
            price={price}
            title={title}
            description={description}
            image={image}
            key={id}
            buy={buy} // Assuming you want to pass discount as well
          />
        ))}
      </div>
    </div>
  );
}

export default App;
