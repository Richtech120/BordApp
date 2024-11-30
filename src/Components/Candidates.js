import React from "react";
import "./Candidates.css";
import {
  Image1,
  Image10,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
} from "../Images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChartBar,
  faMessage,
  faNoteSticky,
} from "@fortawesome/free-regular-svg-icons";

const Candidate = [
  {
    image: Image1,
    username: "Sonia Hoppe",
    email: "hao-sonia92@gmail.com",
    note: 4,
    chat: 1,
  },
  {
    image: Image2,
    username: "Wilbur Hackett",
    email: "wilbur-hack@yahoo.com",
    note: 2,
    chat: 1,
  },
  {
    image: Image3,
    username: "Annette Dickinson",
    email: "anet-son@gmail.com",
    note: 3,
    chat: 1,
  },
  {
    image: Image4,
    username: "Lorette Pan",
    email: "lor-luee@gmail.com",
    note: 2,
    chat: 2,
  },
  {
    image: Image5,
    username: "Melissa Bartoletti",
    email: "mel.barto@gmail.com",
    note: 1,
    chat: 1,
  },
  {
    image: Image6,
    username: "Keith Hirthe",
    email: "Keith-hirthe@gmail.com",
    note: 5,
    chat: 2,
  },
  {
    image: Image7,
    username: "Angela Von",
    email: "angela93@gmail.com",
    note: 2,
    chat: 1,
  },
  {
    image: Image8,
    username: "Gina Steuber",
    email: "gina-stu32@gmail.com",
    note: 1,
    chat: 2,
  },
  {
    image: Image9,
    username: "Lisa Harvey",
    email: "helo-lisaa@hotmail.com",
    note: 3,
    chat: 1,
  },
  {
    image: Image10,
    username: "Caroline Stracke",
    email: "carli489@yahoo.com",
    note: 2,
    chat: 1,
  },
];

function Candidates() {
  return (
    <div className="Candidates-container">
      <h2>Candidates</h2>
      <div className="SIIH-Container">
        <li>
          SOURCED<p className="spn1">20</p>
        </li>
        <li>
          IN PROGRESS<p className="spn2">20</p>
        </li>
        <li>
          INTERVIEW<p className="spn3">20</p>
        </li>
        <li>
          HIRED<p className="spn4"> 20</p>
        </li>
      </div>

      <div className="main-candidate">
        {Candidate.map((content) => (
          <div className="content">
            <div className="text-container">
              <img src={content.image} alt={content.username} />
              <div className="text">
                <h3>{content.username}</h3>
                <p>{content.email}</p>
              </div>
            </div>
            <hr></hr>
            <div className="reaction">
              <FontAwesomeIcon icon={faLinkedin} />
              <p>Linkedin</p>
              <FontAwesomeIcon icon={faNoteSticky} />
              <p>{content.note}</p>
              <FontAwesomeIcon icon={faMessage} />
              <p>{content.chat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Candidates;
