import "./navbar-style.css";
import {faBarsStaggered, faBagShopping, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm">
          <div className="container">
            <a className="logo navbar-brand" href="/">
              Folik
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon className="navbar-toggler-icon" icon={faBarsStaggered} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Shops
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
              </ul>
              <div className="control ms-2 mb-2 mb-lg-0">
                <div className="ps-3 pe-3 d-lg-block">
                  <FontAwesomeIcon className="control-icon" icon={faMagnifyingGlass} />
                </div>
                <div className="ps-3 pe-3 d-lg-block">
                  <FontAwesomeIcon className="control-icon" icon={faBagShopping} />
                </div>
                <div className="ps-3 pe-3 d-lg-block">
                  <FontAwesomeIcon className="control-icon" icon={faUser} />
                </div>
              </div>
              <div className="authentication">
                <a href="/" className="sign-in-btn btn rounded-pill ">Sign In</a>
                <a href="/" className="sign-up-btn btn rounded-pill ">Sign Up</a>
              </div>
            </div>
          </div>
        </nav>
    );
};

export default NavBar;