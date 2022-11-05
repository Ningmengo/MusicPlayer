import React from "react";
import { Link } from "react-router-dom";
import "../sidebar/SideBarButton.css";

const SideBarButton = (props) => {
  return (
    <Link to={props.to}>
      <div className="btn-body">
        {props.icon}
        <p className="btn-title">{props.title}</p>
      </div>
    </Link>
  );
};

export default SideBarButton;
