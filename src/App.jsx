import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const data = [
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
  ];

  return (
    <div className="container w-[1280px] mx-auto">
      <div>
        <Navbar />
      </div>
      <div className=" flex justify-around pt-15">
        {data.map(({ id, price, title, description, image, buy }) => (
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
