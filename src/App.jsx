import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {

  const [products, setProducts] = useState([]);   

  const getProduct = async ()=>{
    try{
     const data = await axios('https://api.escuelajs.co/api/v1/products')
      setProducts(data.data)
    } catch(error){
      alert("Error fetching data: " + error.message);
    }
  }

  useEffect(()=>{
    getProduct()
  },[])

  

  
  
  // console.log(products[0].category.image);
  

  return (
    <div className="container mx-auto">
      <div>
        <Navbar />
      </div>
      <div className=" grid grid-cols-5 gap-5 pt-15">
        {products.slice(0, 20).map(({title, description,id, price, images},rating)=>(
          <Card key={id} title={title} image={images} description={description} price={price} id={id} rating={rating}/>
        ))}
      </div>

      {/* <div className="flex flex-col mt-20 gap-10">
        {products.map(({title, description,id, price, images})=>(
          <Card key={id} title={title} image={images} description={description} price={price} id={id}/>
        ))}
      </div> */}
    </div>
  );
}

export default App;
