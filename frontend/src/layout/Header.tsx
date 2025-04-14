// import { Link } from "react-router-dom";
// import { FaCalendarCheck } from "react-icons/fa";

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 shadow-sm" style={{position:'absolute',top:'0',right:'0',left:'0',zIndex:'99'}}>
//       <div className="container-fluid px-4">
//         <div className="d-flex align-items-center">
//           <Link
//             to="/"
//             className="navbar-brand fw-bold text-primary d-flex align-items-center ms-3"
//           >
//             <img
//               src="./logo.webp"
//               alt="Logo"
//               className="me-2"
//               width={50}
//               height={50}
//             />
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto ms-3">
//             <li className="nav-item">
//               <Link to="/" className="nav-link text-dark fw-medium">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className="nav-link text-dark fw-medium">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/event-category"
//                 className="nav-link text-dark fw-medium"
//               >
//                 Event Categories
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact" className="nav-link text-dark fw-medium">
//                 Contact / Support
//               </Link>
//             </li>
//           </ul>

//           <div className="d-flex flex-column align-items-center gap-2 ms-auto">
//             <div className="d-flex align-items-center gap-2">
//               <span className="text-muted small">
//                 <FaCalendarCheck className="me-1" /> Register Your Business
//               </span>
//             </div>
//             <div className="d-flex align-items-center gap-2">
//               <Link to="/signup" className="btn btn-outline-primary btn-sm">
//                 Sign up
//               </Link>
//               <Link to="/login" className="btn btn-primary btn-sm">
//                 Sign in
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import { JSX, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa6";
import { Navbar } from "react-bootstrap";
import * as Icons from "react-icons/fa";
console.log(Icons);

const Header = () => {
  const [expanded, setExpended] = useState<boolean>(false);

  const closeNav = () => setExpended(false);

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      expanded={expanded}
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        left: "0",
        padding : '0 0 5px 0 ',
        zIndex: "99",
        boxShadow : '0 4px 3px rgba(0,0,0,0.4)'
      }}
    >
      <div className="container-fluid px-2">
        <div className="d-flex align-items-center">
          <Link
            to="/"
            className="navbar-brand fw-bold text-primary d-flex align-items-center ms-3"
          >
            <img
              src="./logo.webp"
              alt="Logo"
              className="me-2"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <Navbar.Toggle
          aria-controls="navbarNav"
          onClick={() => setExpended(expanded ? false : true)}
        />

        <Navbar.Collapse className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav me-auto ms-3 ">
            <li onClick={closeNav} className="nav-item">
              <Link to="/" className="nav-link text-dark fw-medium">
                Home
              </Link>
            </li>
            <li onClick={closeNav} className="nav-item">
              <Link to="/about" className="nav-link text-dark fw-medium">
                About
              </Link>
            </li>
            <li onClick={closeNav} className="nav-item">
              <Link
                to="/event-category"
                className="nav-link text-dark fw-medium"
              >
                Event Categories
              </Link>
            </li>
            <li onClick={closeNav} className="nav-item">
              <Link to="/contact" className="nav-link text-dark fw-medium">
                Contact / Support
              </Link>
            </li>
          </ul>

          <div className="d-flex flex-column align-items-center gap-2 ms-auto">
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted small">
                <FaCalendarCheck className="me-1" /> Register Your Business
              </span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Link
                onClick={closeNav}
                to="/signup"
                className="btn btn-outline-primary btn-sm"
              >
                Sign up
              </Link>
              <Link
                onClick={closeNav}
                to="/login"
                className="btn btn-primary btn-sm"
              >
                Sign in
              </Link>
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
