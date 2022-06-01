import "./carousel-style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShirt, faBorderAll, faLaptop, faSunPlantWilt, faDog, faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import firstImage from "../../images/apple-watch-0.png"
import PrimaryBtn from "../buttons/primary-btn/PrimaryBtn";

const Carousel = () => {
    return (
        <div className="container">
            <div className="row mt-1">
                <div className="menu col-lg-3 d-none d-lg-block shadow-sm">
                    <div className="container mt-3 ">
                        <div className="menu-title rounded">
                            <FontAwesomeIcon icon={faBorderAll} size="2x"/>
                            <span className="menu-title-text">Categories</span>
                        </div>
                        <ul className="menu-list mt-4">
                            <li className="menu-item rounded">
                                <FontAwesomeIcon className="menu-item-icon" icon={faShirt} />
                                <span className="cat-title">Fashion</span>
                            </li>
                            <li className="menu-item rounded">
                                <FontAwesomeIcon className="menu-item-icon" icon={faLaptop} />
                                <span className="cat-title">Electronics</span>
                            </li>
                            <li className="menu-item rounded">
                                <FontAwesomeIcon className="menu-item-icon" icon={faSunPlantWilt} />
                                <span className="cat-title">Home & Garden</span>
                            </li>
                            <li className="menu-item rounded">
                                <FontAwesomeIcon className="menu-item-icon" icon={faDog} />
                                <span className="cat-title">Pets</span>
                            </li>
                            <li className="menu-item rounded">
                                <FontAwesomeIcon className="menu-item-icon" icon={faBasketShopping} />
                                <span className="cat-title">Groceries</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="carousel-m-item active col-lg-9">
                    <div className="text-carousel d-flex align-items-center">
                        <div className="text ps-2">
                            <h1 className="carousel-title">
                                50% Off
                                <br/>
                                For Your First Shopping
                            </h1>
                            <p className="text-black-50">
                                Brand new components and templates to help folks quickly
                                <br/>
                                get started with Bootstrap
                            </p>
                            <PrimaryBtn btnName="Visit Collection"/>
                        </div>
                    </div>
                    <div className="img-carousel d-flex align-items-center">
                        <img className="img" src={firstImage} alt="first"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;