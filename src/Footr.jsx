import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsMailbox,
} from "react-icons/bs";
function Footr() {
  return (
    <div className="foot-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <ul>
              <li>@2008 - 2023 GetYourGuide. Made in India </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsLinkedin />
              </li>
              <li>
                <BsTwitter />{" "}
              </li>
              <li>
                <BsInstagram />
              </li>
              <li>
                <BsMailbox />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footr;
