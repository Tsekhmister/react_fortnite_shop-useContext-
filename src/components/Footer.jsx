import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="page-footer amber">
        <div className="footer-copyright">
          <div className="container">
            ©{new Date().getFullYear()} Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/Tsekhmister/react_fortnite_shop"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
