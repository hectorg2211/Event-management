import React from "react";

// Context
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const Event = ({
  id,
  title,
  date,
  description,
  location,
  tickets,
  image,
  uid,
}) => {
  const [{ user }, dispatch] = useStateValue();

  const handleButtonClick = () => {
    dispatch({
      type: actionTypes.REGISTER_TO_EVENT,
      eventId: id,
      uid: user.uid,
    });
  };

  return (
    <div className="event d-flex-column">
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
        <button className="btn btn--2" onClick={handleButtonClick}>
          {user?.uid === uid ? "See your event" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Event;
