import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <div className="fl">
        <button type="button">
          <img src="./images/icons/user.png" alt="User Settings" />
        </button>
      </div>

      <div className="fl">
        <Logo />
      </div>

      <div className="fl">
        <button type="button">
          <img src="./images/icons/messages.png" alt="View Messages" />
        </button>
      </div>
    </header>
  );
}

export default Header;
