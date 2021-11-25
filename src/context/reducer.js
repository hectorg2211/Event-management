const dummyEvents = [
  {
    id: 1,
    title: "A really cool event",
    dateTime: "This friday",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum distinctio optio sapiente similique vero quaerat! Quam quis corrupti aspernatur!",
    location: "At my house",
    tickets: "",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    createdByUID: "oNrKdOaUuAOvfUOZHqU9zFGJ8KI3",
    registered: [],
  },
  {
    id: 2,
    title: "Another cool event",
    dateTime: "Next week",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum distinctio optio sapiente similique vero quaerat! Quam quis corrupti aspernatur!",
    location: "At luigis mansion",
    tickets: "",
    image:
      "https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    createdByUID: "oNrKdOaUuAOvfUOZHqU9zFGJ8KI3",
    registered: [],
  },
  {
    id: 3,
    title: "The best event",
    dateTime: "Today",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum distinctio optio sapiente similique vero quaerat! Quam quis corrupti aspernatur!",
    location: "At luigis mansion",
    tickets: "",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    createdByUID: "",
    registered: [],
  },
];

export const initialState = { user: null, events: dummyEvents };

export const actionTypes = {
  SET_USER: "SET_USER",
  ADD_EVENT: "ADD_EVENT",
  REGISTER_TO_EVENT: "REGISTER_TO_EVENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user };

    case actionTypes.ADD_EVENT:
      return { ...state, events: [action.event, ...state.events] };

    /* NOTE: Adding users to the event registered array*/
    case actionTypes.REGISTER_TO_EVENT:
      /* TODO: Add the username to show on a list of registered individuals */
      if (!action.uid || !state.events) return { ...state };
      const event = state.events.find((event) => event.id === action.eventId);

      if (event.registered.includes(action.uid)) return { ...state };
      event.registered.push(action.uid);

      const updatedEvent = state.events.map((element) =>
        element.id === action.eventId ? event : element
      );
      return { ...state, events: updatedEvent };
    default:
      return state;
  }
};

export default reducer;
