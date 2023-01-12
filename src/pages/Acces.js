import React, { useState, useEffect } from "react";
import shifftPageStyle from "../function/shifftPageStyle";
import map from "../images/map.png";

const Acces = () => {
  const Redirection = () => {
    window.open(
      "https://www.google.fr/maps/place/Allali+J%C3%A9r%C3%B4me/@48.8582259,2.2733551,17.5z/data=!4m5!3m4!1s0x47e67aac8dbf01fd:0x8b496aac000a492f!8m2!3d48.8576951!4d2.2739115"
    );
  };

  console.log(localStorage.getItem("sidebar"));

  useEffect(() => {
    // Update the document title using the browser API
    localStorage.setItem("sidebar", "false");
  });

  return (
    <div className="colorBackground">
      <div style={shifftPageStyle()}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ textDecorationLine: "underline" }}>Plan d'Acces</h1>
          </div>
          <div
            style={{
              marginTop: "0.5%",
              borderBottom: "solid",
              borderWidth: "4px",
              width: "101%",
              position: "relative",
              borderBottomColor: "#6E79A0",
            }}
          />
        </div>
        {/**********************************************************************************************/}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {/***************************************************************************/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div
              //style={{
              //display: "flex",
              //flexDirection: "column",
              //marginLeft: "50px",
              //}}
              className="shiftmobile"
            >
              <div
                style={{ textAlign: "center", textDecorationLine: "underline" }}
              >
                MAP
              </div>
              <div style={{ textAlign: "center" }}>
                <img src={map} alt="map" className="map" />
              </div>
              <div
                onClick={Redirection}
                style={{ textAlign: "center", textDecorationLine: "underline" }}
              >
                Lien google map
              </div>
            </div>
          </div>
        </div>
        {/**********************************************************************************************/}
      </div>
    </div>
  );
};

export default Acces;
