import { Route, Routes, Navigate } from "react-router-dom";
import { RequireLoginContainer } from "./containers/RequireLoginContainer";

import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Tweets from "./components/tweets";

import "./App.css";

const App = () => {
  return (
    <div id="app">
      <Header />
      <div className="d-flex justify-content-center m-5 pb-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/tweets"
            element={
              <RequireLoginContainer>
                <Tweets />
              </RequireLoginContainer>
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
