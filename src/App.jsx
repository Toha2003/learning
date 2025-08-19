import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      id: 1,
      price: 200,
      title: "Card 1",
      description: "This is the first card",
      image: "https://picsum.photos/200/300",
      discount: 0.25,
    },
    {
      id: 2,
      price: 250,
      title: "Card 2",
      description: "This is the second card",
      image: "https://picsum.photos/200/300?2",
      discount: 0.3,
    },
    {
      id: 3,
      price: 250,
      title: "Card 3",
      description: "This is the three card",
      image: "https://picsum.photos/200/300?3",
      discount:0,
    },
  ];

  return (
    <>
      <Navbar />
      {data.map(({id,price,title,description,image, discount}) => (
          <Card
            id={id}
            price={price}
            title={title}
            description={description}
            image={image}
            key={id}
            discount={discount}  // Assuming you want to pass discount as well
          />
      ))}
    </>
  );
}

export default App;
