import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RequireLogin from "./auth/requireLogin";

import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Tweets from "./components/tweets";

import "./App.css";

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log("isloggedIn", isLoggedIn);
  return (
    <div id="app">
      <Header />
      <div className="d-flex justify-content-center m-5 pb-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/tweets"
            element={
              <RequireLogin isLoggedIn={isLoggedIn}>
                <Tweets />
              </RequireLogin>
            }
          />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
