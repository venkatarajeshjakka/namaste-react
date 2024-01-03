import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, crusine, star, duration } = props.data;

  return (
    <div className="res-card">
      <img className="res-img" alt="restaurant logo" src={CDN_URL} />
      <h3>{name}</h3>
      <h4>{crusine}</h4>
      <h4>{star} stars</h4>
      <h4>{duration} min</h4>
    </div>
  );
};

export default RestaurantCard;
