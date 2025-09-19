import React from "react";
import error404 from "./assets/404_page_cover.jpg";

const Errorpage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={error404} alt="404 error" style={{ width: "400px" }} />
    </div>
  );
};

export default Errorpage;
