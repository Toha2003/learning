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

  return (
    <div className="container mx-auto">
      <div>
        <Navbar />
      </div>
      <div className=" grid grid-cols-5 gap-5 pt-15">
        
      </div>
    </div>
  );
}

export default App;
