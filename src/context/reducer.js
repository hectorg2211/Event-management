const dummyEvents = [
  {
    title: "A really cool event",
    dateTime: "This friday",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum distinctio optio sapiente similique vero quaerat! Quam quis corrupti aspernatur!",
    location: "At my house",
    tickets: "",
  },
  {
    title: "Another cool event",
    dateTime: "Next week",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum distinctio optio sapiente similique vero quaerat! Quam quis corrupti aspernatur!",
    location: "At luigis mansion",
    tickets: "",
  },
];

export const initialState = { user: null, events: dummyEvents };

export const actionTypes = {
  SET_USER: "SET_USER",
  ADD_EVENT: "ADD_EVENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    case actionTypes.ADD_EVENT:
      return { ...state, events: [action.event, ...state.events] };
    default:
      return state;
  }
};

export default reducer;
