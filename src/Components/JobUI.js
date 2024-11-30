import React, { useState } from "react";
import Candidates from "./Candidates";
import JobDescription from "./JobDescription";
import './JobUI.css';

function JobUi() {
  const [activeTab, setActiveTab] = useState("JobDescription");
  return (
    <div className="JobUI-container">
      <div className="tabs">
        <button
          className={activeTab == "JobDescription" ? "active" : ""}
          onClick={() => setActiveTab("JobDescription")}
        >
          Job Description
        </button>

        <button
          className={activeTab == "Candidates" ? "active" : ""}
          onClick={() => setActiveTab("Candidates")}
        >
          Candidates
        </button>
      </div>

      {/* Render the selected component */}
      {activeTab === "JobDescription" && <JobDescription />}
      {activeTab === "Candidates" && <Candidates />}
    </div>
  );
}

export default JobUi;
