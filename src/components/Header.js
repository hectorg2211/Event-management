import React, { useEffect } from "react";

// Router
import { Link } from "react-router-dom";

// For login
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

// Context
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  /* The following use effect check for the signed in uses */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: actionTypes.SET_USER,
        user,
      });
    });
  }, [dispatch]);

  const handleLogin = () => {
    if (!user) signInWithPopup(auth, provider);
    if (user) signOut(auth);
  };

  return (
    <header className="header d-flex-justify-center">
      <div className="header__container d-flex-justify-between">
        <div className="navigation d-flex">
          <Link to="/">
            <h3 className="h3 h3--1">Home</h3>
          </Link>
          {user && (
            <Link to="/admin">
              <h3 className="h3 h3--1">Admin panel</h3>
            </Link>
          )}
        </div>
        <button className="btn btn--1" onClick={handleLogin}>
          {user ? user.displayName : "Sign in with Google"}
        </button>
      </div>
    </header>
  );
};

export default Header;
