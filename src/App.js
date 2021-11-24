import "./scss/App.scss";
import Header from "./components/Header";
import AdminPanel from "./components/AdminPanel";
import Home from "./components/Home";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
