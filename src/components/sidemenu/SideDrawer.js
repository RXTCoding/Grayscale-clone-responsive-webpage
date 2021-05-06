import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Project</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
