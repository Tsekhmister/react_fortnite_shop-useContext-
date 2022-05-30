import React from "react";

export const Header = () => {
  return (
    <div>
      <nav className="blue darken-1">
        <div className="nav-wrapper">
          <a href="!#" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/Tsekhmister/react_fortnite_shop" target="_blank" rel="noreferrer">
                Repository
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
