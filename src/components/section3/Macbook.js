import React from 'react'
import "./macbook.css"
function Macbook() {
  return (
    <div>
      <div className="third-section">
        <div className="text-wrapper pt-5 text-center">
          <h1 className="fw-bolder">MacBook Air 15"</h1>
          <h3>
            Impressively big.Impossibly thin.
           
           
          </h3>
          <a className="text-decoration-none me-3" href="">
            Learn more&nbsp;<i className="arrow"></i>
          </a>
          <a className="text-decoration-none" href="">
            Buy&nbsp;<i className="arrow"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Macbook