import React, { useState, useEffect } from "react";
import shifftPageStyle from "../function/shifftPageStyle";
import AllColorPage from "../function/AllColorPage";
import img1 from "../images/misto.png";

const Accueil = () => {
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
            <h1>Accueil</h1>
          </div>
          <div>
            <span>
              Ce site est dédié aux techniques chirurgicales classiques et plus
              innovantes de la chirurgie esthétique du regard, de la chirurgie
              plastique orbito-palpébrale et cranio-faciale de l’adulte et du
              rajeunissement esthétique médical de la face. La chirurgie
              réparatrice des malformations congénitales, tumeurs et
              traumatismes est détaillée dans le site: www.oculoplastie.fr
            </span>
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
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div style={{ textAlign: "center" }}>Avant</div>
            <div>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
              <br></br>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
              <br></br>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
              <br></br>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
              <br></br>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
              <br></br>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
              <br></br>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
              <br></br>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
              <br></br>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
              <br></br>
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
              </span>
            </div>
          </div>

          {/***************************************************************************/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ textAlign: "center" }}>NOM PRENOM</div>
              <div style={{ textAlign: "center" }}>
                <img src={img1} alt="img1" className="imgAccueil" />
              </div>
              <div style={{ textAlign: "center" }}>NOM PRENOM</div>
              <div style={{ textAlign: "center" }}>
                <span>
                  Ce site est dédié aux techniques chirurgicales classiques et
                  plus innovantes de la chirurgie esthétique du regard, de la
                  chirurgie plastique orbito-palpébrale et cranio-faciale de
                  l’adulte et du rajeunissement esthétique médical de la face.
                  La chirurgie réparatrice des malformations congénitales,
                  tumeurs et traumatismes est détaillée dans le site:
                  www.oculoplastie.fr
                </span>
              </div>
            </div>
          </div>
        </div>
        {/**********************************************************************************************/}
      </div>
    </div>
  );
};

export default Accueil;
