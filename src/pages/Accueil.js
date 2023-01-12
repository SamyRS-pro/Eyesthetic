import React, { useState, useEffect } from "react";
import shifftPageStyle from "../function/shifftPageStyle";
import img1 from "../images/lotus.jpg";

const Accueil = () => {
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ textDecorationLine: "underline" }}>Accueil</h1>
          </div>
          <div
            //style={{
            //display: "flex",
            //flexDirection: "column",
            //marginLeft: "50px",
            //}}
            className="shiftmobile"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span>
                Ce site est dédié aux techniques chirurgicales classiques et
                plus innovantes de la chirurgie esthétique du regard, de la
                chirurgie plastique orbito-palpébrale et cranio-faciale de
                l’adulte et du rajeunissement esthétique médical de la face.
                <br></br>
                La chirurgie réparatrice des malformations congénitales, tumeurs
                et traumatismes est détaillée dans le site: www.oculoplastie.fr
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
            <div className="accueilcol">
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
                  <div
                    style={{
                      textAlign: "center",
                      textDecorationLine: "underline",
                    }}
                  >
                    NOM PRENOM
                  </div>
                  <div style={{ textAlign: "center", marginTop: "2%" }}>
                    <img src={img1} alt="img1" className="imgAccueil" />
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      textDecorationLine: "underline",
                    }}
                  >
                    Oculplasticien
                  </div>
                  <hr></hr>
                  <div>
                    <span>
                      Chirugie esthétique du regard <br></br>
                      Chirurgie oculaire Chirurgie <br></br>
                      plastique orbito-palpébrale et cranio-facial
                    </span>
                  </div>
                </div>
              </div>
              <div className="bar"></div>
              {/**********************************************************************************************/}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "5%",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    textDecorationLine: "underline",
                  }}
                >
                  Avant
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "2%",
                    lineHeight: "1.5",
                  }}
                >
                  <span>
                    Professeur associé au College de Medecine des Hopitaux de
                    Paris
                  </span>
                  <hr></hr>
                  <span>Ancien Interne des Hôpitaux de Paris</span>
                  <hr></hr>
                  <span>Lauréat de la faculté de Médecine de Paris</span>
                  <hr></hr>
                  <span>
                    Ancien chef de clinique à la faculté René Descartes Paris V
                  </span>
                  <hr></hr>
                  <span>
                    Praticien Hospitalier à l’Hôpital Necker-Enfants Malades
                    Centre de Référence en Maladies Rares
                  </span>
                  <hr></hr>
                  <span>Président de la Socieé Française d’OculoPlastie</span>
                  <hr></hr>
                  <span>
                    Membre de la Société Française de Chirurgie Plastique et
                    Esthétique de la Face et du Cou
                  </span>
                  <hr></hr>
                  <span>Membre de la Société Française d’Ophtalmologie</span>
                  <hr></hr>
                  <span>1er Prix de la SFO 2006</span>
                  <hr></hr>
                  <span>
                    Prix de la Meilleure Communication SOFCPRE 2006 SOciété
                    Française de Chirurgie Plastique Reconstructrice et
                    Esthétique
                  </span>
                </div>
              </div>
              <div className="bar"></div>
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
                    marginLeft: "5%",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      textDecorationLine: "underline",
                    }}
                  >
                    CENTRE DE MEDECINE ESTHETIQUE MOZART
                  </div>
                  <div style={{ textAlign: "center", marginTop: "2%" }}>
                    <img src={img1} alt="img1" className="imgAccueil" />
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      textDecorationLine: "underline",
                    }}
                  >
                    Institut de la Paupière et de l'Orbite
                  </div>
                  <hr></hr>
                  <div>
                    <span>
                      13-15 Chaussée de la Muette 75016 PARIS<br></br>
                      Accès: Metro station Muette- ligne 9 <br></br>
                      Bus: 32,22,52 <br></br>
                      Parking Vinci : Passy <br></br>
                      Autolib: station Mozart <br></br>
                      Taxi : station la Muette devant le cabinet<br></br>
                      Téléphone : 01 42 88 25 13 <br></br>
                      Mail: oculoplastie@hotmail.fr
                    </span>
                  </div>
                </div>
              </div>
              {/***************************************************************************/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
