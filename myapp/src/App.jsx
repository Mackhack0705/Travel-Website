import "./App.css";
import FlightSearch from "./pages/FlightSearch";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login-form' element={<LoginForm />} />
                <Route path='/signup-form' element={<SignUp />} />
                <Route path='/flight-Search' element={<FlightSearch />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
