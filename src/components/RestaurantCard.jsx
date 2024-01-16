import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, crusine, star, duration, image } = props.data;

  const imageUrl = CDN_URL + image;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
      <img className="rounded-lg pb-2" alt="restaurant logo" src={imageUrl} />
      <h3 className="font-bold pb-2 text-lg">{name}</h3>
      <h4 className="pb-2">{crusine}</h4>
      <h4>{star} stars</h4>
      <h4>{duration} min</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
