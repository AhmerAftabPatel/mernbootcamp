import React from "react";
import "./_core.scss";
const Card = () => {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card__head">
          <img
            className="card__image"
            src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div className="card__body">
          <h4 className="card__title">Harpa</h4>
          <p className="card__description">Womans printed clothing</p>
          <p className="card__description">
            <span className="card__price">Rs.839 &ensp;</span>
          </p>
          <div className="row">
            <div className="col-md-6 card__button">
              <a>
                <div className="card__button--inner card__bag">Add to Bag</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
