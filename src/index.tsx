import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/login/RegisterPage";
import Hub from "./components/userArea/hub";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path={"/"} element={<App />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/register"} element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>

  // <UserStatusContext.Provider value={{ userStatus, setUserStatus }}>
  //   <Router>
  //     <NavMenu />
  //     <div className="App">
  //       <Routes>
  //         <Route
  //           path={"/login"}
  //           element={
  //             <LoggedInWrapper>
  //               <LoginPage />
  //             </LoggedInWrapper>
  //           }
  //         />
  //         <Route
  //           path={"/register"}
  //           element={
  //             <LoggedInWrapper>
  //               <RegisterPage />
  //             </LoggedInWrapper>
  //           }
  //         />
  //         <Route
  //           path={"/hub"}
  //           element={
  //             <PrivateWrapper>
  //               <Hub />
  //             </PrivateWrapper>
  //           }
  //         />
  //       </Routes>
  //     </div>
  //   </Router>
  // </UserStatusContext.Provider>
);
