import "./falsh-deals-style.css"
import {faBolt, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "../../cards/product-card/ProductCard";

const FlashDeals = () => {

    return (
        <div className="flash-deals">
            <div className="container  pb-5">
                <div className="header mb-4">
                    <div className="section-title">
                        <FontAwesomeIcon className="section-icon" icon={faBolt}/>
                        <span className="title">Flash Deals</span>
                    </div>
                    <a href="/" className="view-all">
                        <span className="view-text">View all</span>
                        <FontAwesomeIcon className="view-icon" icon={faCaretRight}/>
                    </a>
                </div>
                <OwlCarousel
                    className="owl-theme"
                    nav
                    dots={false}
                    margin={20}
                    smartSpeed={1000}
                    responsive={
                        {
                            0:{
                                items:1
                            },
                            500:{
                                items:1
                            },
                            700:{
                                items:2
                            },
                            1000:{
                                items:3
                            },
                            1200:{
                                items:4
                            }
                        }
                    }
                >
                    <div className="item">
                        <ProductCard />
                    </div>
                    <div className="item">
                        <ProductCard />
                    </div>
                    <div className="item">
                        <ProductCard />
                    </div>
                    <div className="item">
                        <ProductCard />
                    </div>
                    <div className="item">
                        <ProductCard />
                    </div>
                    <div className="item">
                        <ProductCard />
                    </div>
                    <div className="item">
                        <ProductCard />
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default FlashDeals;