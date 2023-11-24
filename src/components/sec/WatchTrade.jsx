import React from 'react'
import "./WatchTrade.css"
import watch from "./logo_promo_pride23__cnampkeybsty_large.png";


import trade from "./logo_tradein__d1fpktgipvki_large.png";

function WatchTrade() {
  return (
    <div>
      <div className="forth-section row mb-3 mt-3 w-100">
        <div className="trade-in col-sm-6 w-50 gap-3 mb-3 mb-sm-0">
          <div className="text-wrapper pt-5 text-center text-dark">
            <img style={{ maxWidth: " fit-content" }} src={trade} alt="" />
            <h4>Upgrade and save.lt's that easy.</h4>
            <a className="text-decoration-none" href="#trade">
              See what your device is worth<i className="ms-2 arrow"></i>
            </a>
          </div>
        </div>

        <div className="watch-series gap-3 w-50 col-sm-6 mb-3 mb-sm-0">
          <div className="text-wrapper pt-5 text-center text-dark">
            <img style={{ maxWidth: " fit-content" }} src={watch} alt="" />
            <h4>Pride is in the air.</h4>
            <a className="text-decoration-none" href="#watch">
              Shop the new Pride Edition Sport Band
              <i className="ms-2 arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchTrade