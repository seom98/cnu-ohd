import React from "react";
import { Link } from "react-router-dom";
import GiftBoxIcon from "./GiftBoxIcon";
import "./Pages.css"


function HomePage() {
  const boxColors = ['r', 'g', 'b', 'w'];
  const a = parseInt(Math.random() * 4 + 1);
  const b = parseInt(Math.random() * 4);


  return (
    <div>

      <h1 style={{ marginTop: "100px", fontSize: "70px", fontFamily: "Century Gothic, sans-serif" }}>O.H.D</h1>
      <h6 style={{ fontSize: "20px" }}>Oh! happy day</h6>

      <div>
        <GiftBoxIcon boxColor={boxColors[b]} ribbonColor={a} width="350px" height="350px" />
      </div>

      <div>
        <Link to="/signup"><button className="button1 bbb">방생성하기</button></Link>
      </div>

    </div>
  );
}

export default HomePage; 