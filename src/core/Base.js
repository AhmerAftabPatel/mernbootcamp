import React from "react";
import Menu from "./Menu";
const Base = ({
  title = "My Title",
  children,
  className = "bg-dark text-white p-4",
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
      </div>
      <div className={className}>{children}</div>
    </div>

    <footer className="footer bg-dark mt-auto py-3 ">
      <div className="container-fluid text-white text-center bg-success py-3">
        <h4>If you got any questions, feel free to reach out</h4>
        <button className="btn btn-outline-warning btn-lg">Contact Us</button>
      </div>
      <div className="container text-center py-3">
        <p className="text-muted">
          Created using <span className="text-white">MERN</span> stack
        </p>
      </div>
    </footer>
  </div>
);

export default Base;