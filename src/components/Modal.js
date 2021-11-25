import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Context
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

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

/* TODO: Add context to use user uid */

export default function BasicModal({ createdByUid, id }) {
  const [{ user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const [numberOfTickets, setNumberOfTickets] = useState(1);

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
      <button className="btn btn--2" onClick={handleOpen}>
        {user?.uid === createdByUid ? "See your event" : "Get tickets"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
          <div className="modal__container d-flex">
            <h3 className="h3">Select amount of tickets:</h3>{" "}
            <input
              type="number"
              value={numberOfTickets}
              onChange={handleOnTicketChange}
            />
          </div>
          <button className="btn btn--2" onClick={handleRegisterClick}>
            Register
          </button>
        </Box>
      </Modal>
    </>
  );
}
