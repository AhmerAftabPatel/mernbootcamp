import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "p-4",
  icon = "",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid sec_bg">
      <div className="py-5 text-center mb-0">
        <h2 className="display-4 font-weight-bold">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}> {children} </div>
    </div>
    <div className="container-fluid footer_bg">
      <footer className="footer mt-auto py-4">
        <div className="row">
          <div className="col-md-8">
            <div className="py-4 text-center">
              <h3 className="text-white text-capitalize">
                lol
              </h3>
            </div>
          </div>
          {/* <div className="col-md-4 d-flex align-items-center">
            <button className="btn gradiant_btn">Contact Us</button>
          </div> */}
        </div>
      </footer>
    </div>
    <div className="container-fluid bg-light py-3">
      <div className="row">
        <div className="col-md-7">
          <span className="">
             {new Date().getFullYear()}. made with love by ahmer
          </span>
        </div>
        <div className="col-md-5">
          <span className="float-right">
            gg wp
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Base;
