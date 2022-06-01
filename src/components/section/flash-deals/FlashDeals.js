import "./falsh-deals-style.css"
import {faBolt, faCaretRight, faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProductCard from "../../product-card/ProductCard";

const FlashDeals = () => {
    const scrollRight = () =>{
        document.getElementById('scroll-div').scrollLeft += 240;
    }

    const scrollLeft = () =>{
        document.getElementById('scroll-div').scrollLeft -= 240;
    }

    return (
        <div className="flash-deals">
            <div className="container pt-5 pb-5">
                <div className="header">
                    <div className="section-title">
                        <FontAwesomeIcon className="section-icon" icon={faBolt}/>
                        <span className="title">Flash Deals</span>
                    </div>
                    <a href="/" className="view-all">
                        <span className="view-text">View all</span>
                        <FontAwesomeIcon className="view-icon" icon={faCaretRight}/>
                    </a>
                </div>
                <div className="scroll-section">
                    <button
                        onClick={scrollLeft}
                        className="scroll-controller d-none d-lg-block"
                    >
                        <FontAwesomeIcon className="scroll-controller-icon" icon={faArrowLeft}/>
                    </button>
                    <div id="scroll-div" className="flash-scroll">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <button
                        onClick={scrollRight}
                        className="scroll-controller d-none d-lg-block"
                    >
                        <FontAwesomeIcon className="scroll-controller-icon" icon={faArrowRight}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlashDeals;