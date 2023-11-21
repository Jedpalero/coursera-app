import React from "react";
import banner from "../icons_assets/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve Table</button>
        </div>
        <div className="banner-img">
          <img src={banner} alt="banner 1" />
        </div>
      </section>
    </header>
  );
};
export default Header;
