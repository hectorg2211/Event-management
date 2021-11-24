import React, { useState, useEffect } from "react";
import EventCreator from "./EventCreator";
import Event from "./Event";

// Context
import { useStateValue } from "../context/StateProvider.js";

// Router
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [showEventCreator, setShowEventCreator] = useState(false);
  const [{ user, events }] = useStateValue();

  const navigate = useNavigate();

  /* Navigate the use home when they are not signed in */
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  const renderEvents = () =>
    events.map((event, i) => (
      <Event
        key={i}
        title={event.title}
        date={event.dateTime}
        description={event.description}
        location={event.location}
        tickets={event.tickets}
        image={event.image}
      />
    ));

  return (
    <section className="events d-flex-column d-flex-align-center">
      <h1 className="h1">Events</h1>
      <button className="btn btn--2" onClick={() => setShowEventCreator(true)}>
        New Event
      </button>
      {showEventCreator && (
        <EventCreator setShowEventCreator={setShowEventCreator} />
      )}

      <div className="events__container">{renderEvents()}</div>
    </section>
  );
};

export default AdminPanel;
