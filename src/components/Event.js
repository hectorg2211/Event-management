import React from "react";

const Event = ({ title, date, description, location, tickets }) => {
  return (
    <div className="event">
      <div className="event__container d-flex">
        {/* <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="My party"
        /> */}
        <div>Hello I'm an image</div>
      </div>

      <div className="event__container d-flex">
        <h2 className="h2">{title}</h2>
        <h2 className="h2">{date}</h2>
      </div>

      <div className="event__container">
        <div className="event__description">
          <p className="p">{description}</p>
        </div>
      </div>

      <div className="event__container d-flex">
        <h3 className="h3">Location</h3>
        <h3 className="h3">{tickets}</h3>
      </div>
    </div>
  );
};

export default Event;
