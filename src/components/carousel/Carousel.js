import "./carousel-style.css";
import firstImage from "../../assets/images/apple-watch-0.png"
import PrimaryBtn from "../buttons/primary-btn/PrimaryBtn";
import OwlCarousel from "react-owl-carousel";

const Carousel = () => {
    return (
        <div className="m-carousel ms-1 me-1">
            <OwlCarousel
                className="owl-theme mt-4"
                loop={true}
                autoplay={true}
                smartSpeed={2000}
                items={1}
            >
                <div className="item">
                    <div className="text-carousel">
                        <div className="text ps-2">
                            <h1 className="carousel-title">
                                50% Off For Your First
                                <br/>
                                Shopping
                            </h1>
                            <p className="description-txt text-black">
                                Brand new components and templates to help folks quickly
                                <br/>
                                get started with Bootstrap
                            </p>
                            <PrimaryBtn btnName="View Collection"/>
                        </div>
                    </div>
                    <div className="img-carousel d-flex align-items-center">
                        <img className="img" src={firstImage} alt="first"/>
                    </div>
                </div>
                <div className="item">
                    <div className="text-carousel d-flex align-items-center">
                        <div className="text ps-2">
                            <h1 className="carousel-title">
                                50% Off For Your First
                                <br/>
                                Shopping
                            </h1>
                            <p className="description-txt text-black">
                                Brand new components and templates to help folks quickly
                                <br/>
                                get started with Bootstrap
                            </p>
                            <PrimaryBtn btnName="View Collection"/>
                        </div>
                    </div>
                    <div className="img-carousel d-flex align-items-center">
                        <img className="img" src={firstImage} alt="first"/>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Carousel;