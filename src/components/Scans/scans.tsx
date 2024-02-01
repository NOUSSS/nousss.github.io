import { useEffect } from "react";

import {
  getTailleChapitres,
  nextChapitre,
  prevChapitre,
  selectChapter,
} from "./functions";

import { addScript } from "../Films/functions";

import "./scans.scss";
import "./responsive.scss";

import uparrow from "../../Assets/uparrow.png";

import { SCRIPT_URL, CHAPITRE_SPECIAUX } from "./constants";

const Scans = () => {
  useEffect(() => {
    addScript(SCRIPT_URL).then(() => {
      let retard = 0;

      for (let i = 0; i < getTailleChapitres(); i++) {
        if (CHAPITRE_SPECIAUX.includes(i)) {
          document.querySelector(
            ".chapitres"
          )!.innerHTML += `<option id="Chapitre ${
            i + 1
          }">Chapitre ONE SHOT</option>`;

          retard++;
        } else {
          document.querySelector(
            ".chapitres"
          )!.innerHTML += `<option id="Chapitre ${i + 1}">Chapitre ${
            i + 1 - retard
          }</option>`;
        }
      }

      const select = document.querySelector("select")!;
      const currentChapter = window.localStorage.getItem("chapitre") ?? 1;

      selectChapter(currentChapter);

      select.addEventListener("change", (event) => {
        if (event.target instanceof HTMLSelectElement) {
          const id = event.target.selectedOptions[0].id
            .match(/[0-9]/g)!
            .join("");

          selectChapter(id);
        }
      });

      document
        .querySelectorAll(".prevButton")
        .forEach((e) => e.addEventListener("click", prevChapitre));

      document
        .querySelectorAll(".nextButton")
        .forEach((e) => e.addEventListener("click", nextChapitre));

      document.querySelector(".lastChapter")!.addEventListener("click", () => {
        selectChapter(
          document
            .querySelector("select")!
            .options[
              document.querySelector("select")!.options.length - 1
            ].id.match(/[0-9]/g)!
            .join("")
        );
      });

      document.querySelector(".loading")!.innerHTML = "";
    });
  }, []);

  return (
    <div className="container--scans">
      <div className="title">
        <h1>
          One <span>Piece</span>
        </h1>
      </div>

      <select name="chapitres" className="chapitres"></select>

      <div className="container--buttons--scans">
        <button className="lastChapter">Dernier chapitre</button>

        <div className="buttons--scans">
          <button className="prevButton">Chapitre précedent</button>
          <button className="nextButton">Chapitre suivant</button>
        </div>
      </div>

      <p className="loading">
        Si les chapitres ne chargent pas apres 5-10 secondes, cliquez{" "}
        <span
          style={{ textDecoration: "underline" }}
          onClick={() => window.location.reload()}
        >
          ici
        </span>
      </p>
      <div className="scans"></div>

      <div className="container--buttons--scans">
        <div className="buttons--scans">
          <button className="prevButton">Chapitre précedent</button>
          <button className="nextButton">Chapitre suivant</button>
        </div>
      </div>

      <img
        alt="scroll tout en haut de la page"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        src={uparrow}
      ></img>

      <p className="mark">Les images ne sont pas hébergées sur nos serveurs.</p>
      <footer>© 2022 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </div>
  );
};
export default Scans;
