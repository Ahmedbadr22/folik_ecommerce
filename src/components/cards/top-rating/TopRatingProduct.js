import "./top-rating-product-style.css"
import StarsBar from "react-rating-stars-component";
import productImage from "../../../assets/images/13.webp"

const TopRatingProduct = () => {
    return (
        <div className="top-rating-product text-center">
            <div className="top-rating-img-holder">
                <img src={productImage} alt=""/>
            </div>
            <div className="rating">
                <StarsBar
                    className="rating-bar"
                    count={5}
                    size={20}
                    activeColor="#ffd700"
                    value={2}
                    edit={false}
                />
                <span className="number-of-rates">
                    (45)
                </span>
            </div>
            <span className="top-rating-product-name">Watch</span>
            <div className="product-price">$1302.00</div>
        </div>
    );
};

export default TopRatingProduct;