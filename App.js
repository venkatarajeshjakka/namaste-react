import React from 'react';
import ReactDOM from 'react-dom/client';

const IMG_SRC = "https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
const Header = () => {
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={IMG_SRC} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}

const RestaurantCard = (props) => {
    const { name, crusine, star, duration } = props.data

    return (<div className="res-card">
        <img
            className="res-img"
            alt="restaurant logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/195876a3181ef63f76e45e3a7b49b585" />
        <h3>{name}</h3>
        <h4>{crusine}</h4>
        <h4>{star} stars</h4>
        <h4>{duration} min</h4>
    </div>)
}
const Body = () => {

    return (<div className="body">
        <div className="search">
            Search
        </div>
        <div className="res-container">
            <RestaurantCard data={{ name: "Meghana Foods", crusine: "Biryani, North Indian, Asian", star: 4.4, duration: 38 }} />
            <RestaurantCard data={{ name: "KFC", crusine: "Burger, Fast Food", star: 4.4, duration: 38 }} />
        </div>
    </div>)
}
const App = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);