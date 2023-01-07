import React, { useState, useEffect } from "react";
import shifftPageStyle from "../function/shifftPageStyle";
import AllColorPage from "../function/AllColorPage";
import map from "../images/map.png";

const Acces = () => {
  const Redirection = () => {
    window.open(
      "https://www.google.fr/maps/place/Allali+J%C3%A9r%C3%B4me/@48.8582259,2.2733551,17.5z/data=!4m5!3m4!1s0x47e67aac8dbf01fd:0x8b496aac000a492f!8m2!3d48.8576951!4d2.2739115"
    );
  };

  return (
    <div className="colorBackground" style={AllColorPage()}>
      <div style={shifftPageStyle()}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Plan d'Acces</h1>
          </div>
          <div
            style={{
              borderBottom: "solid",
              width: AllColorPage().width + AllColorPage().width * 0.159,
              position: "relative",
              left: "-10%",
              borderWidth: "10px",
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
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ textAlign: "center" }}>MAP</div>
              <div style={{ textAlign: "center" }}>
                <img src={map} alt="map" className="map" />
              </div>
              <div onClick={Redirection} style={{ textAlign: "center" }}>
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
