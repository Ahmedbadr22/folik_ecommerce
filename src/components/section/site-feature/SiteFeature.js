import "./site-feature-style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruckFast, faCreditCard, faShield, faHeadphones} from "@fortawesome/free-solid-svg-icons";

const SiteFeature = () => {
    return (
        <div className="container-fluid section-bg d-none d-lg-block  mt-3">
            <div className="site-feature-section">
                <div className="site-feature-card shadow">
                    <FontAwesomeIcon className="icon" icon={faTruckFast}/>
                    <h4 className="title">Worldwide Delivery</h4>
                    <span className="description text-center">
                        We offer competitive prices on our 100 million plus product any range.
                    </span>
                </div>
                <div className="site-feature-card shadow">
                    <FontAwesomeIcon className="icon" icon={faCreditCard}/>
                    <h4 className="title">Safe Payment</h4>
                    <span className="description text-center">
                        We offer competitive prices on our 100 million plus product any range.
                    </span>
                </div>
                <div className="site-feature-card shadow">
                    <FontAwesomeIcon className="icon" icon={faShield}/>
                    <h4 className="title">Shop With Confidence</h4>
                    <span className="description text-center">
                        We offer competitive prices on our 100 million plus product any range.
                    </span>
                </div>
                <div className="site-feature-card shadow">
                    <FontAwesomeIcon className="icon" icon={faHeadphones}/>
                    <h4 className="title">24/7 Support</h4>
                    <span className="description text-center">
                        We offer competitive prices on our 100 million plus product any range.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SiteFeature;