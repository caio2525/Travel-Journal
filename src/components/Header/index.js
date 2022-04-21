import React from "react";
import "./index.css"

export default function Header()
{
  return(
    <div className="header-container">
      <img
        className="header-image"
        src="mundo.png"
        alt='texto'
      />
      <span className="header-text">my travel journal</span>
    </div>
  )
}
