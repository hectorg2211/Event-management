import React from "react";
import { useParams } from "react-router-dom";

// Context
import { useStateValue } from "../context/StateProvider";

const IndividualEvent = () => {
  const { eventId } = useParams();
  const [{ events }] = useStateValue();
  const eventInfo = events.filter((event) => event.id === Number(eventId))[0];

  const renderRegisteredUsers = () =>
    eventInfo.registered.map((user) => <p className="p">{user.username}</p>);

  return (
    <div className="individual-event d-flex-column d-flex-align-center">
      <div className="individual-event__container d-flex-column">
        <img src={eventInfo.image} alt="" className="individual-event__image" />
        <h2 className="h2">{eventInfo.title}</h2>
        <p className="p">{eventInfo.description}</p>
        <h3 className="h3">{eventInfo.location}</h3>
        <h3 className="h3">{eventInfo.date}</h3>
      </div>

      <div className="individual-event__container">
        <h2 className="h2">Registered users</h2>
        {renderRegisteredUsers()}
      </div>
    </div>
  );
};

export default IndividualEvent;
