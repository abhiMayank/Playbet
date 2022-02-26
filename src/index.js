import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import AllBets from "./all-bets";
import { ContactUs } from "./contact-us";
import Login from "./login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<Header />} />
        <Route path="allBets" element={<AllBets />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
