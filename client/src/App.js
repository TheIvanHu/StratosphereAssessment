import React, { Component } from "react";
import bluestar from "./mediaFiles/bluestar.svg";
import greenanchor from "./mediaFiles/greenanchor.svg";
import orangelock from "./mediaFiles/orangelock.svg";
import purpledollar from "./mediaFiles/purpledollar.svg";
import yellowchrome from "./mediaFiles/yellowchrome.svg";
import redclock from "./mediaFiles/redclock.svg";
import img from "./mediaFiles/img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import jsontext from "./mediaFiles/text.json";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1 className="text-center mt-5">{jsontext.Title}</h1>
        </div>

        <div className="row justify-content-md-center">
          <p className="text-center col-lg-6 col-centered"> {jsontext.par1}</p>
        </div>
        <div className="row justify-content-md-center">
          <p className="text-center col-lg-6 centered "> {jsontext.par2}</p>
        </div>
        <div className="row">
          <div className="col-md-4 col-6 justify-content-center p-4">
            <img src={bluestar} alt="blue star" className="mx-auto d-block" />
            <p className="text-center"> {jsontext.desc1}</p>
          </div>

          <div className="col-md-4 col-6 justify-content-center p-4">
            <img
              src={greenanchor}
              alt="green anchor"
              className="mx-auto d-block"
            />
            <p className="text-center">{jsontext.desc2}</p>
          </div>
          <div className="col-md-4 col-6 justify-content-center p-4">
            <img
              src={orangelock}
              alt="orange lock"
              className="mx-auto d-block"
            />
            <p className="text-center">{jsontext.desc3}</p>
          </div>
          <div className="col-md-4 col-6 justify-content-center p-4">
            <img
              src={purpledollar}
              alt="purple dollar"
              className="mx-auto d-block"
            />
            <p className="text-center">{jsontext.desc4}</p>
          </div>
          <div className="col-md-4 col-6 justify-content-center p-4">
            <img
              src={yellowchrome}
              alt="yellow chrome"
              className="mx-auto d-block"
            />
            <p className="text-center">{jsontext.desc5}</p>
          </div>
          <div className="col-md-4 col-6 justify-content-center p-4">
            <img src={redclock} alt="red clock" className="mx-auto d-block" />
            <p className="text-center">{jsontext.desc6}</p>
          </div>
        </div>
      </div>

      <div
        className="centerin"
        style={{ maxWidth: "1500px", margin: "auto", paddingTop: "5vh" }}
      >
        <img
          src={img}
          alt="team photo"
          className="img-fluid px-md-5 mx-lg-5 "
        />
        <div className="container position-relative mt-n3 ">
          <div className="row">
            <div className="col col-xl-6 p-lg-5 pt-4 mx-3 taglineBox shadow ">
              <h1>{jsontext.boxTitle}</h1>
              <p> {jsontext.boxPar}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
