import "./footer-style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faTiktok, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer d-flex align-items-center">
            <div className="container m-5">
                <div className="row">
                    <div className="g-1 col-lg-4">
                        <a className="logo navbar-brand" href="/">
                          Folik
                        </a>
                        <p className="footer-desc mt-3">
                            Lorem ipsum dolor sit amet, consectetur
                            <br/>
                            adipiscing elit. Auctor libero id et, in gravida.
                            <br/>
                            Sit diam duis mauris nulla cursus.
                            <br/>
                            Erat et lectus vel ut sollicitudin elit at amet.
                        </p>
                    </div>
                    <div className="g-1 col-lg-2">
                        <span className="footer-title">
                          About Us
                        </span>
                        <div className="footer-list text-light mt-3">
                            <div className="footer-list-item">
                                <a href="/">Careers</a>
                            </div>
                            <div className="footer-list-item">
                                <a href="/">Our Stores</a>
                            </div>
                            <div className="footer-list-item">
                                <a href="/">Our Cares</a>
                            </div>
                            <div className="footer-list-item">
                                <a href="/">Terms & Conditions</a>
                            </div>
                            <div className="footer-list-item">
                                <a href="/">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="g-1 col-lg-3">
                        <span className="footer-title">
                          Customer Care
                        </span>
                        <div className="footer-list text-light mt-3">
                            <div className="footer-list-item">
                                <a href="/">Help Center</a>
                            </div>
                            <div className="footer-list-item">
                                <a href="/">How to Buy</a>
                            </div>
                            <div className="footer-list-item">
                                <a href="/">Track Your Order</a>
                            </div>
                            <div className="footer-list-item">
                                <a href="/">Corporate & Bulk Purchasing</a>
                            </div>
                            <div className="footer-list-item">
                                <a href="/">Returns & Refunds</a>
                            </div>
                        </div>
                    </div>
                    <div className="g-1 col-lg-3">
                        <span className="footer-title">
                          Contact Us
                        </span>
                        <div className="footer-list text-light mt-3">
                            <div className="footer-list-item">
                                <span>
                                    70 Washington Square South,
                                    <br/>
                                    New York, NY 10012, United States
                                </span>
                            </div>
                            <div className="footer-list-item">
                                <span>Email: folik.help@gmail.com</span>
                            </div>
                            <div className="footer-list-item">
                                <span>Phone: +1 1123 456 780</span>
                            </div>
                            <div className="footer-list-item d-flex justify-content-start mt-3">
                                <FontAwesomeIcon className="icon" icon={faFacebook}/>
                                <FontAwesomeIcon className="icon" icon={faTiktok}/>
                                <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                                <FontAwesomeIcon className="icon" icon={faTwitter}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;