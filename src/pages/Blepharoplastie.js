import React, { useState, useEffect } from "react";
import shifftPageStyle from "../function/shifftPageStyle";
import AllColorPage from "../function/AllColorPage";
import img1 from "../images/misto.png";
import img2 from "../images/rohan.jpeg";

export const BlepharoplastieSup = () => {
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
            <h1>Blepharoplastie</h1>
          </div>
          <div>
            <span>Superieure</span>
          </div>
          <div
            style={{
              borderBottom: "solid",
              width: AllColorPage().width,
              position: "relative",
              left: "-5%",
              borderWidth: "10px",
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

export const BlepharoplastieSupEla = () => {
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
            <h1>Blepharoplastie</h1>
          </div>
          <div>
            <span>Superieure Elargie</span>
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

export const BlepharoplastieSupPto = () => {
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
            <h1>Blepharoplastie</h1>
          </div>
          <div>
            <span>Superieure + Ptosis</span>
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
