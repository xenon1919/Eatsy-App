import React from "react";
import "./Header.css";
import ExploreMenu from "../ExploreMenu/ExploreMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Get your favorite food now</h2>
        <p>
          Choose from a diverse array of dishes, each carefully crafted to
          tantalize your taste buds. Our menu features a delightful variety of
          options, from savory appetizers to decadent desserts, ensuring there's
          something for everyone to enjoy.
        </p>
        <button onClick={ExploreMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
