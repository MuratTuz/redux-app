import { Route, Routes, Navigate } from "react-router-dom";
import { RequireLoginContainer } from "./containers/RequireLoginContainer";
import { TweetsContainer } from "./containers/TweetsContainer";
import { HeaderContainer } from "./containers/HeaderContainer";

import Footer from "./components/footer";
import Login from "./components/login";

import "./App.css";

const App = () => {
  return (
    <div id="app">
      <HeaderContainer />
      <div className="d-flex justify-content-center m-5 pb-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/tweets"
            element={
              <RequireLoginContainer>
                <TweetsContainer />
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
