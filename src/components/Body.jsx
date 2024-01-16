import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturants, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    var response = await data.json();

    var restuarants =
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(restuarants);
    var mappedList = restuarants.map((item) => {
      return {
        name: item.info.name,
        star: item.info.avgRating,
        crusine: item.info.cuisines.join(", "),
        duration: item.info.sla.deliveryTime,
        image: item.info.cloudinaryImageId,
        costForTwo: item.info.costForTwo,
        id: item.info.id,
        promoted: item.info.promoted,
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
      <div className="flex justify-between">
        <div className="p-4">
          <input
            type="text"
            className="border border-solid border-black rounded px-4 py-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded"
            onClick={searchClickHander}
          >
            Search
          </button>
        </div>
        <div className="p-4">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded"
            onClick={buttonClickHandler}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredResturants.length > 0
          ? filteredResturants.map((item) => (
              <Link key={item.id} to={`restaurants/${item.id}`}>
                {item.star > 4.5 ? (
                  <RestaurantCardPromoted data={item} />
                ) : (
                  <RestaurantCard data={item} />
                )}
              </Link>
            ))
          : resData.map((item) => (
              <Link key={item.id} to={`restaurants/${item.id}`}>
                {item.star > 4.5 ? (
                  <RestaurantCardPromoted data={item} />
                ) : (
                  <RestaurantCard data={item} />
                )}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
