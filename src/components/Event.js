import React from "react";

import BasicModal from "./Modal";

const Event = ({
  id,
  title,
  date,
  description,
  // location,
  image,
  uid,
}) => {
  // const [{ user }, dispatch] = useStateValue();

  return (
    <div className="event d-flex-column">
      <div className="event__container d-flex">
        <img src={`${image}`} alt="title" />
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
        <BasicModal createdByUid={uid} id={id} />
      </div>
    </div>
  );
};

export default Event;
