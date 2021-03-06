import React from "react";
import Event from "./Event";

// Context
import { useStateValue } from "../context/StateProvider";

const Home = () => {
  const [{ events }] = useStateValue();

  const renderEvents = () =>
    events.map((event, i) => (
      <Event
        key={i}
        id={event.id}
        title={event.title}
        date={event.dateTime}
        description={event.description}
        location={event.location}
        tickets={event.tickets}
        image={event.image}
        uid={event.createdByUID}
      />
    ));

  return (
    <section className="events d-flex-column d-flex-align-center ">
      <h1 className="h1">Events</h1>
      <div className="events__container">{renderEvents()}</div>
    </section>
  );
};

export default Home;
