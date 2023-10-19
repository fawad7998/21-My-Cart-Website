import React from "react";
import { useGlobalContext } from "./context";
import bag from "./media/icons/bag.svg";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>hotDeals</h3>
        <div className="nav-container">
          <img src={bag} alt="bag" />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
