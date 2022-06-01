import "./nav-header-style.css";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faLinkedin, faTiktok, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavHeader = () => {
    return (
        <div className="nav-header d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="contact col-lg-6 p-2">
                        <div className="phone-number">
                            <FontAwesomeIcon className="icon" icon={faPhone}/>
                            <span className="text-small"> (+02)1222742623</span>
                        </div>
                        <div className="email">
                            <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                            <span className="text-small">support@me.com</span>
                        </div>
                    </div>
                    <div className="social-links col-lg-6 p-2">
                        <FontAwesomeIcon className="icon" icon={faFacebook}/>
                        <FontAwesomeIcon className="icon" icon={faTiktok}/>
                        <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                        <FontAwesomeIcon className="icon" icon={faTwitter}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavHeader;