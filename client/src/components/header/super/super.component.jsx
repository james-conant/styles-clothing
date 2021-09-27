import React from "react";
import { ReactComponent as UserLogo } from "../../../assets/user.svg";

import "./super.styles.scss";

const SuperContainer = () => {
  return (
    <div className="super-container">
      <div className="super-container__options">
        <div className="super-container__option--user">
          <UserLogo className="super-container__user-logo" />
          <div className="super-container__user-text">My Account</div>
        </div>
        <div className="super-container__divider"></div>
        <div className="super-container__option">Blog</div>
        <div className="super-container__divider"></div>
        <div className="super-container__option">Newsleter</div>
        <div className="super-container__divider"></div>
        <div className="super-container__option">Help</div>
        <div className="super-container__divider"></div>
        <div className="super-container__option">United States</div>
      </div>
    </div>
  );
};

export default SuperContainer;
