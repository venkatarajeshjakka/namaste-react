
import { useState, useEffect } from "react";
import { MENU_API } from "../constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        var restaurantData = json.data;

        setResInfo(restaurantData);
    };

    return resInfo;
}

export default useRestaurantMenu;