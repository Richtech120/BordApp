import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faUserCircle,
  faUser,
  faMoneyBill1,
  faCalendar,
  faPlusSquare,
  faSquare,
  faMinusSquare,
  faArrowAltCircleUp,
} from "@fortawesome/free-regular-svg-icons";
import { faFlipboard, faAirbnb, faDashcube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faDashboard, faUserPlus } from "@fortawesome/free-solid-svg-icons";

function SideNav() {
  return (
    <div className="side-nav">
      <div className="logo-container">
        <div className="logo">
          <FontAwesomeIcon className="faFlipboard" icon={faFlipboard} />
          <h4>
            BordUp<span className="span">TM</span>
          </h4>
        </div>
        <FontAwesomeIcon className="faMinusSquare" icon={faMinusSquare} />
      </div>
      <hr></hr>

      <button className="btn1">
        <FontAwesomeIcon className="faAirbnb" icon={faAirbnb} />
        <div className="btn-text">
          <h3>Rocks Company</h3>
          <p>Team - 20 Members</p>
        </div>
        <FontAwesomeIcon
          className="faArrowAltCircleUp"
          icon={faArrowAltCircleUp}
        />
      </button>

      <div className="main-menu-container">
        <p className="p">MAIN MENU</p>

        <div className="main-menu">
          <Link to="/dashboard">
            <div className="menu">
              <FontAwesomeIcon className="menu-icon" icon={faDashcube} />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/employee">
            <div className="menu">
              <FontAwesomeIcon className="menu-icon" icon={faUserCircle} />
              <p>Employee</p>
            </div>
          </Link>
          <Link to="/recruitment">
            <div className="menu">
              <FontAwesomeIcon className="menu-icon" icon={faUserPlus} />
              <p>Recruitment</p>
            </div>
          </Link>
          <Link to="/payroll">
            <div className="menu">
              <FontAwesomeIcon className="menu-icon" icon={faMoneyBill1} />
              <p>Payroll</p>
            </div>
          </Link>
          <Link to="/schedule">
            <div className="menu">
              <FontAwesomeIcon className="menu-icon" icon={faCalendar} />
              <p>Schedule</p>
            </div>
          </Link>
        </div>
      </div>

      <hr></hr>
      <div className="department-container">
        <div className="plus-container">
          <p className="p">DEPARTMENT</p>
          <FontAwesomeIcon className="faPlusSquare" icon={faPlusSquare} />
        </div>
        <div className="department">
          <div className="dpm">
            <FontAwesomeIcon className="sq1" icon={faSquare} />
            <p>Business and Marketing</p>
          </div>
          <div className="dpm">
            <FontAwesomeIcon className="sq2" icon={faSquare} />
            <p>Design</p>
          </div>
          <div className="dpm">
            <FontAwesomeIcon className="sq3" icon={faSquare} />
            <p>Project Manager</p>
          </div>
          <div className="dpm">
            <FontAwesomeIcon className="sq4" icon={faSquare} />
            <p>Human Resource</p>
          </div>
          <div className="dpm">
            <FontAwesomeIcon className="sq5" icon={faSquare} />
            <p>Development</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
