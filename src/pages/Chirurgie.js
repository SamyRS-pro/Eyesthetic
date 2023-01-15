import React, { useState, useEffect } from "react";
import shifftPageStyle from "../function/shifftPageStyle";
import img1 from "../images/lotus.jpg";
import img2 from "../images/Nenuphar.jpg";

export const ChirurgieCombine = () => {
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
            <h1 style={{ textDecorationLine: "underline" }}>Chirurgie</h1>
          </div>
          <div style={{ marginTop: "0.5%" }}>
            <span style={{ textDecorationLine: "underline" }}>
              Combinee des 4 Paupieres
            </span>
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
              marginTop: "0.5%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ textAlign: "center", textDecorationLine: "underline" }}
              >
                Avant
              </div>
              <div
                style={{
                  marginTop: "1.5%",
                }}
              >
                <img src={img1} alt="img1" className="img" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  textAlign: "center",
                  marginLeft: "50px",
                  textDecorationLine: "underline",
                }}
              >
                Apres
              </div>
              <div
                style={{
                  marginTop: "1.5%",
                }}
              >
                <img src={img2} alt="img2" className="img2" />
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "0.5%",
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
              marginTop: "0.5%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ textAlign: "center", textDecorationLine: "underline" }}
              >
                Avant
              </div>
              <div
                style={{
                  marginTop: "1.5%",
                }}
              >
                <img src={img1} alt="img1" className="img" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  textAlign: "center",
                  marginLeft: "50px",
                  textDecorationLine: "underline",
                }}
              >
                Apres
              </div>
              <div
                style={{
                  marginTop: "1.5%",
                }}
              >
                <img src={img2} alt="img2" className="img2" />
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "0.5%",
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

export const ChirurgiePoche = () => {
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
            <h1 style={{ textDecorationLine: "underline" }}>Chirurgie</h1>
          </div>
          <div style={{ marginTop: "0.5%" }}>
            <span style={{ textDecorationLine: "underline" }}>
              Des Poches sans cicatrice
            </span>
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
              marginTop: "0.5%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ textAlign: "center", textDecorationLine: "underline" }}
              >
                Avant
              </div>
              <div
                style={{
                  marginTop: "1.5%",
                }}
              >
                <img src={img1} alt="img1" className="img" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  textAlign: "center",
                  marginLeft: "50px",
                  textDecorationLine: "underline",
                }}
              >
                Apres
              </div>
              <div
                style={{
                  marginTop: "1.5%",
                }}
              >
                <img src={img2} alt="img2" className="img2" />
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "0.5%",
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
              marginTop: "0.5%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ textAlign: "center", textDecorationLine: "underline" }}
              >
                Avant
              </div>
              <div
                style={{
                  marginTop: "1.5%",
                }}
              >
                <img src={img1} alt="img1" className="img" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  textAlign: "center",
                  marginLeft: "50px",
                  textDecorationLine: "underline",
                }}
              >
                Apres
              </div>
              <div
                style={{
                  marginTop: "1.5%",
                }}
              >
                <img src={img2} alt="img2" className="img2" />
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "0.5%",
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
