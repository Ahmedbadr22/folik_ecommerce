import "./product-card-style.css";
import headPhone from "../../images/headphone.png"
import {faHeart as unSelectedHeart} from "@fortawesome/free-regular-svg-icons"
import {faHeart as selectedHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

const ProductCard = () => {
    const [love, setLove] = useState(unSelectedHeart);

    const isLoveToggle = () =>{
        love === unSelectedHeart ? setLove(selectedHeart) : setLove(unSelectedHeart);
    }
    return (
        <div className="product-card shadow-sm">
            <div className="product-header">
                <div className="sale-off rounded-pill">56% off</div>
                {
                    love === selectedHeart
                        ? <FontAwesomeIcon onClick={isLoveToggle} className="love-icon" icon={love} color={"rgb(233, 69, 96)"}/>
                        : <FontAwesomeIcon onClick={isLoveToggle} className="love-icon" icon={love}/>
                }
            </div>
            <img className="product-img" src={headPhone} alt="headphone"/>
            <h3 className="product-name">Product Name</h3>
        </div>
    );
};

export default ProductCard;