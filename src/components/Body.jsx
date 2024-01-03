import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          data={{
            name: "Meghana Foods",
            crusine: "Biryani, North Indian, Asian",
            star: 4.4,
            duration: 38,
          }}
        />
        <RestaurantCard
          data={{
            name: "KFC",
            crusine: "Burger, Fast Food",
            star: 4.4,
            duration: 38,
          }}
        />
      </div>
    </div>
  );
};

export default Body;
