const dummyEvents = [
  {
    title: "A really cool event",
    dateTime: "This friday",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum distinctio optio sapiente similique vero quaerat! Quam quis corrupti aspernatur!",
    location: "At my house",
    tickets: "",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Another cool event",
    dateTime: "Next week",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum distinctio optio sapiente similique vero quaerat! Quam quis corrupti aspernatur!",
    location: "At luigis mansion",
    tickets: "",
    image:
      "https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    title: "The best event",
    dateTime: "Today",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum distinctio optio sapiente similique vero quaerat! Quam quis corrupti aspernatur!",
    location: "At luigis mansion",
    tickets: "",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
