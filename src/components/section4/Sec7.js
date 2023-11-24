import React from "react";
import "./Sec7.css";

function Sec7() {
  return (
    <div>
      <div className="forth-section row mb-3">
        <div className="macbook-pro col-sm-6 ">
          <div className="text-wrapper pt-5 text-center text-white">
            <h1 className="fw-bold">MacBook Pro</h1>
            <h4>Supercharged by</h4>
            <h4>M2 Pro and M2 Max.</h4>
            <a className="text-decoration-none me-3" href="">
              Learn more&nbsp;<i className="arrow"></i>
            </a>
            <a className="text-decoration-none" href="">
              Buy&nbsp;<i className="arrow"></i>
            </a>
          </div>
        </div>

        <div className="iphone-health col-sm-6 mb-3 mb-sm-0">
          <div className="text-wrapper pt-5 text-center text-white">
            <h1 className="fw-bold">iPhone Health</h1>
            <h4>Healthcare</h4>

            <a className="text-decoration-none me-3" href="">
              Learn more&nbsp;<i className="arrow"></i>
            </a>
            <a className="text-decoration-none" href="">
              Buy&nbsp;<i className="arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec7;
