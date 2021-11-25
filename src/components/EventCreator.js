import React, { useState } from "react";

import Geocoder from "./Geocoder";

// Context
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider.js";

const EventCreator = ({ setShowEventCreator }) => {
  const [{ user }, dispatch] = useStateValue();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [tickets, setTickets] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.ADD_EVENT,
      event: {
        title,
        description,
        location,
        dateTime,
        tickets,
        image,
        createdByUID: user?.uid,
      },
    });
    setShowEventCreator(false);
  };

  return (
    <div className="event-creator">
      <div className="event-creator__container">
        <form action="" className="form d-flex-column" onSubmit={handleSubmit}>
          <div className="form__container d-flex-column">
            <input
              type="text"
              placeholder="Event title"
              className="input"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="input"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <textarea
              className="input--1"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Event description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>

          <div className="form__container d-flex-justify-center">
            <div className="box d-flex-column d-flex-align-center">
              <h3 className="h3 h3--1">Location</h3>
              <Geocoder />
            </div>
            <div className="box d-flex-column d-flex-align-center">
              <h3 className="h3 h3--1">Date & time</h3>
              <input
                type="datetime-local"
                className="input"
                onChange={(e) => setDateTime(e.target.value)}
                value={dateTime}
              />
            </div>

            <div className="box d-flex-column d-flex-align-center">
              <h3 className="h3 h3--1">Number of tickets</h3>
              <input
                type="number"
                className="input"
                onChange={(e) => setTickets(e.target.value)}
                value={tickets}
              />
            </div>

            <button className="btn btn--1" type="submit">
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventCreator;
