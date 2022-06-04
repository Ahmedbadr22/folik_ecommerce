import "./top-rating&featured-brand.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight, faRankingStar, faStar} from "@fortawesome/free-solid-svg-icons";
import TopRatingProduct from "../../cards/top-rating/TopRatingProduct";
import FeaturedBrand from "../../cards/featured-brand/FeaturedBrand";

const TopRatingFeaturedBrand = () => {
    return (
        <div className="top-rating-featured-brand">
            <div className="container pb-5">
                <div className="row">
                    <div className="top-rating col-12 col-lg-6">
                        <div className="header mb-4">
                            <div className="section-title">
                                <FontAwesomeIcon className="section-icon" icon={faRankingStar}/>
                                <span className="title">Top Ratings</span>
                            </div>
                            <a href="/" className="view-all">
                                <span className="view-text">View all</span>
                                <FontAwesomeIcon className="view-icon" icon={faCaretRight}/>
                            </a>
                        </div>
                        <div className="top-rating-body">
                            <TopRatingProduct />
                            <TopRatingProduct />
                            <TopRatingProduct />
                            <TopRatingProduct />
                        </div>
                    </div>
                    <div className="featured-brand col-12 col-lg-6">
                        <div className="header mb-4 mt-4 mt-lg-0">
                            <div className="section-title">
                                <FontAwesomeIcon className="section-icon" icon={faStar}/>
                                <span className="title">Featured Brands</span>
                            </div>
                            <a href="/" className="view-all">
                                <span className="view-text">View all</span>
                                <FontAwesomeIcon className="view-icon" icon={faCaretRight}/>
                            </a>
                        </div>
                        <div className="featured-brand-body">
                            <FeaturedBrand />
                            <FeaturedBrand />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRatingFeaturedBrand;