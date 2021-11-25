import React from "react";

// Context
import { useStateValue } from "../context/StateProvider";

const Event = ({ title, date, description, location, tickets, image, uid }) => {
  const [{ user }] = useStateValue();
  console.log(user?.uid, uid);

  return (
    <div className="event">
      <div className="event__container d-flex">
        <img src={`${image}`} alt="title" />
        {/* <div>Hello I'm an image</div> */}
      </div>

      <div className="event__container d-flex">
        <h2 className="h2">{title}</h2>
      </div>

      <div className="event__container">
        <div className="event__description">
          <p className="p">{description}</p>
        </div>
      </div>

      <div className="event__container d-flex">
        <h3 className="h3">Location </h3>

        {/* <h3 className="h3">{tickets}</h3> */}
      </div>

      <div className="event__container">
        <h3 className="h3">{date}</h3>
      </div>

      <div className="event__container d-flex-column d-flex-justify-center">
        <button className="btn btn--2">
          {user?.uid === uid ? "See your event" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Event;
