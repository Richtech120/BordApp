import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faPencil,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Recruitment.css";
import { Link } from "react-router-dom";
import Candidates from "./Candidates";
import JobDescription from "./JobDescription";

function Recruitment() {
  const [activeTab, setActiveTab] = useState("JobDescription");

  return (
    <div className="right-component">
      <form>
        <FontAwesomeIcon className="faSearchengin" icon={faSearchengin} />
        <input type="text" placeholder="Search Keywoard..." />
        <button className="btn2">$%+K</button>
      </form>

      <div className="design-container">
        <Link to="/dashboard">
          <button className="btn3">
            <FontAwesomeIcon className="faChevronLeft" icon={faChevronLeft} />{" "}
            Back to Job List
          </button>
        </Link>
        <h1>UI/UX Designer</h1>
      </div>

      <div className="candidates-container">
        <div className="designers">
            <div className= {`job ${activeTab ==="JobDescription" ? "active" : ""}`} onClick={() => setActiveTab("JobDescription")}>
              <FontAwesomeIcon icon={faPencil} />
              <p>Job Description</p>
            </div>
          
            <div className={`can ${activeTab === "Candidates" ? "active" : ""}`}
            onClick={() => setActiveTab("Candidates")}
            >
              <FontAwesomeIcon icon={faUserPlus} />
              <p>Candidates</p>
            </div>
          
        </div>
        <div className="tab-content">
          {activeTab === "JobDescription" && <JobDescription/>}
          {activeTab === "Candidates" && <Candidates/>}
        </div>
      </div>
    </div>
  );
}

export default Recruitment;



// import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faPencil,
//   faUserPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import React, { useState } from "react";
// import "./Recruitment.css";
// import { Link } from "react-router-dom";
// import Candidates from "./Candidates";
// import JobDescription from "./JobDescription";

// function Recruitment() {
//   const [activeTab, setActiveTab] = useState("Candidates"); // State to toggle tabs

//   return (
//     <div className="right-component">
//       {/* Search Form */}
//       <form>
//         <FontAwesomeIcon className="faSearchengin" icon={faSearchengin} />
//         <input type="text" placeholder="Search Keyword..." />
//         <button className="btn2">$%+K</button>
//       </form>

//       {/* Header Section */}
//       <div className="design-container">
//         <Link to="/dashboard">
//           <button className="btn3">
//             <FontAwesomeIcon className="faChevronLeft" icon={faChevronLeft} />{" "}
//             Back to Job List
//           </button>
//         </Link>
//         <h1>UI/UX Designer</h1>
//       </div>

//       {/* Tab Navigation */}
//       <div className="candidates-container">
//         <div className="designers">
//           <div
//             className={`job ${activeTab === "JobDescription" ? "active" : ""}`}
//             onClick={() => setActiveTab("JobDescription")}
//           >
//             <FontAwesomeIcon icon={faPencil} />
//             <p>Job Description</p>
//           </div>
//           <div
//             className={`can ${activeTab === "Candidates" ? "active" : ""}`}
//             onClick={() => setActiveTab("Candidates")}
//           >
//             <FontAwesomeIcon icon={faUserPlus} />
//             <p>Candidates</p>
//           </div>
//         </div>

//         {/* Dynamic Content Rendering */}
//         <div className="tab-content">
//           {activeTab === "JobDescription" && <JobDescription />}
//           {activeTab === "Candidates" && <Candidates />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Recruitment;
