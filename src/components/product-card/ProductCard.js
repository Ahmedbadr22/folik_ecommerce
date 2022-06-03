import "./product-card-style.css";
import headPhone from "../../assets/images/headphone.png"
import {faHeart as unSelectedHeart} from "@fortawesome/free-regular-svg-icons"
import {faHeart as selectedHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import StarsBar from "react-rating-stars-component";
import {useState} from "react";

const ProductCard = () => {
    const [love, setLove] = useState(unSelectedHeart);
        const isLoveToggle = () =>{
        love === unSelectedHeart ? setLove(selectedHeart) : setLove(unSelectedHeart);
    }
    return (
        <div className="product-card shadow-sm m-1">
            <div className="product-header">
                <div className="sale-off rounded-pill">56% off</div>
                {
                    love === selectedHeart
                        ? <FontAwesomeIcon onClick={isLoveToggle} className="love-icon" icon={love} color={"rgb(233, 69, 96)"}/>
                        : <FontAwesomeIcon onClick={isLoveToggle} className="love-icon" icon={love}/>
                }
            </div>
            <div className="d-flex justify-content-center">
                <img className="product-img" src={headPhone} alt="headphone"/>
            </div>
            <h3 className="product-name">Product Name</h3>
            <StarsBar
                count={5}
                size={24}
                activeColor="#ffd700"
                value={2}
                edit={false}
            />
            <div className="bottom-section">
                <div className="price">
                    <span className="price-text">$112.00</span>
                    <span className="deleted-price">
                        <del>$150.00</del>
                    </span>
                </div>
                <div className="add-to-cart-btn">
                    +
                </div>
            </div>
        </div>
    );
};

export default ProductCard;