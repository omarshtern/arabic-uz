import ImageSearch from "@mui/icons-material/ImageSearch";
import React, { useState } from "react";
import { photoOptions } from "../utils/photoOptions";
// import { sidebarOptions } from "../utils/sidebarOptions";
import "./Photo.scss";
const Photo = () => {
  const [toggle, setToggle] = useState(false);

  const togleIt = () => {
    console.log("togled");

    setToggle(!toggle);
  };
  return (
    <div className="photo">
      <div className={`menu ${toggle && "open"}`} onClick={togleIt}>
        {photoOptions.map((v, i) => (
          <>
            <div className="button">
              {v.icon}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Photo;