import "./scss/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import AdminPanel from "./components/AdminPanel";
import IndividualEvent from "./components/IndividualEvent";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              <>
                <AdminPanel />
              </>
            }
          />
          <Route path="/admin/:eventId" element={<IndividualEvent />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
