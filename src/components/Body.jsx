import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturants, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    var response = await data.json();

    var restuarants =
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    var mappedList = restuarants.map((item) => {
      return {
        name: item.info.name,
        star: item.info.avgRating,
        crusine: item.info.cuisines.join(", "),
        duration: item.info.sla.deliveryTime,
        image: item.info.cloudinaryImageId,
        costForTwo: item.info.costForTwo,
        id: item.info.id,
      };
    });
    setRestaurantData(mappedList);
  };

  function buttonClickHandler() {
    setRestaurantData((prevState) => {
      let updatedState = prevState.filter((item) => item.star > 4.4);
      return updatedState;
    });
  }

  function searchClickHander() {
    const filteredResturantsArray = resData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurant(filteredResturantsArray);
  }

  if (resData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchClickHander}>Search</button>
        </div>
        <button className="filter-btn" onClick={buttonClickHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResturants.length > 0
          ? filteredResturants.map((item) => (
              <RestaurantCard data={item} key={item.id} />
            ))
          : resData.map((item) => <RestaurantCard data={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Body;
