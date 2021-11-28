import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Context
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

import { Link } from "react-router-dom";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

export default function BasicModal({ createdByUid, id }) {
  const [{ user, events }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [registered, setRegistered] = useState(false);

  console.log("Modal", id);

  /* TODO: Get the event that corresponds to the id*/
  const currentEventRegistrations = events
    .filter((event) => event.id === id)[0]
    .registered.map((registration) => registration?.uid);

  console.log(currentEventRegistrations, registered);

  useEffect(() => {
    if (currentEventRegistrations.includes(user?.uid)) setRegistered(true);
    else setRegistered(false);
  }, [currentEventRegistrations, user?.uid]);

  // if(currentEventRegistrations.includes)
  /* TODO: Get the list of registered users for that event */
  /* TODO: Set state to check wether a uid is in the array of registered users */

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleRegisterClick = () => {
    setOpen(false);
    dispatch({
      type: actionTypes.REGISTER_TO_EVENT,
      eventId: id,
      uid: user.uid,
      username: user.displayName,
      tickets: numberOfTickets,
    });
  };

  const handleOnTicketChange = (e) => {
    if (numberOfTickets <= 0) {
      setNumberOfTickets(1);
      return;
    }
    setNumberOfTickets(e.target.value);
  };

  return (
    <>
      {user?.uid === createdByUid ? (
        <Link to={`/admin/${id}`}>
          <button className="btn btn--2" onClick={handleOpen}>
            {user?.uid === createdByUid ? "See your event" : "Get tickets"}
          </button>
        </Link>
      ) : (
        <button className="btn btn--2" onClick={handleOpen}>
          Get tickets
        </button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
          {!registered && (
            <>
              <div className="modal__container d-flex-align-center d-flex-justify-between">
                <h3 className="h3">Select amount of tickets:</h3>{" "}
                <input
                  type="number"
                  value={numberOfTickets}
                  onChange={handleOnTicketChange}
                  min="1"
                  max="5"
                />
              </div>
              <button className="btn btn--2" onClick={handleRegisterClick}>
                Register
              </button>
            </>
          )}

          {registered && (
            <h3 className="h3 d-flex-justify-center">
              You are already registered to this event
            </h3>
          )}
        </Box>
      </Modal>
    </>
  );
}
