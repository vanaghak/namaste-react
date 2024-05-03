import React from "react";

import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 *  -Nav items
 * Body 
 *  - search
 *  - RestaurantContainer
 *    - RestaurantCard
 *    - Img
 *    - Name of res,star Rating,cuisine,delivery time  
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */



const Header = () => {
  return(
    
        <div className="header">
            <div className="logo-container">
                <img 
                alt="page-logo"
                className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    );
};

const RestaurantCard = (props) => {
    const {resName,cusinie } = props;
 return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tuctdolyoffovvjnxuu4"
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.5 ratings</h4>
            <h4>30-40 minutes</h4>
       </div>
    );

};

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
              <RestaurantCard
              resName="A2B"
              cuisine="south indian,north indian"
              />
              <RestaurantCard resName="pizza Hut" cusinie="Pizza,french fries,donuts" />
             
           </div>
             
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
            
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
 
 


