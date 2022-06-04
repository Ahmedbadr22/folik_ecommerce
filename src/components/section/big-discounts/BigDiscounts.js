import "./big-discounts-section-style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from "react-owl-carousel";
import ProductCard2 from "../../cards/product-card-2/ProductCard2";

const BigDiscounts = () => {
    return (
        <div className="big-discount-section">
            <div className="container  pb-5">
                <div className="header mb-4">
                    <div className="section-title">
                        <FontAwesomeIcon className="section-icon" icon={faGift}/>
                        <span className="title">Big Discounts</span>
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
                                items:2
                            },
                            500:{
                                items:3
                            },
                            700:{
                                items:4
                            },
                            1000:{
                                items:5
                            },
                            1200:{
                                items:6
                            }
                        }
                    }
                >
                    <div className="item">
                        <ProductCard2 />
                    </div>
                    <div className="item">
                        <ProductCard2 />
                    </div>
                    <div className="item">
                        <ProductCard2 />
                    </div>
                    <div className="item">
                        <ProductCard2 />
                    </div>
                    <div className="item">
                        <ProductCard2 />
                    </div>
                    <div className="item">
                        <ProductCard2 />
                    </div>
                    <div className="item">
                        <ProductCard2 />
                    </div>
                    <div className="item">
                        <ProductCard2 />
                    </div>
                    <div className="item">
                        <ProductCard2 />
                    </div>

                </OwlCarousel>
            </div>
        </div>
    );
};

export default BigDiscounts;