import React, { useState, useEffect } from "react";
import shifftPageStyle from "../function/shifftPageStyle";
import img1 from "../images/lotus.jpg";
import img2 from "../images/Nenuphar.jpg";

const Pommettes = () => {
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
            <h1 style={{ textDecorationLine: "underline" }}>
              Augmentation du volume des Pommettes
            </h1>
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
          {/**********************************************************************************************/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ textAlign: "center" }}>Avant</div>
              <div>
                <img src={img1} alt="img1" className="img" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ textAlign: "center", marginLeft: "50px" }}>
                Apres
              </div>
              <div>
                <img src={img2} alt="img2" className="img2" />
              </div>
            </div>
          </div>
          <div
            style={{
              borderBottom: "solid",
              borderWidth: "4px",
              width: "50%",
              position: "relative",
              borderBottomColor: "#6E79A0",
            }}
          />
          {/**********************************************************************************************/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ textAlign: "center" }}>Avant</div>
              <div>
                <img src={img1} alt="img1" className="img" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ textAlign: "center", marginLeft: "50px" }}>
                Apres
              </div>
              <div>
                <img src={img2} alt="img2" className="img2" />
              </div>
            </div>
          </div>
          <div
            style={{
              borderBottom: "solid",
              borderWidth: "4px",
              width: "50%",
              position: "relative",
              borderBottomColor: "#6E79A0",
            }}
          />
          {/**********************************************************************************************/}
        </div>
      </div>
    </div>
  );
};

export default Pommettes;
