import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, crusine, star, duration, image } = props.data;

  const imageUrl = CDN_URL + image;
  return (
    <div className="res-card">
      <img className="res-img" alt="restaurant logo" src={imageUrl} />
      <h3>{name}</h3>
      <h4>{crusine}</h4>
      <h4>{star} stars</h4>
      <h4>{duration} min</h4>
    </div>
  );
};

export default RestaurantCard;
