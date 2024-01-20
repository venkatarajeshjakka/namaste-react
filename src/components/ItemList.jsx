import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card?.info.id}
          className="p-2 m-2 border-b-2 text-left flex gap-3"
        >
          <div className="w-3/12">
            <div className="absolute">
              <button className="p-2 rounded-lg bg-black text-white shadow-lg mx-10">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card?.info.imageId} className="w-full" />
          </div>

          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>- ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
