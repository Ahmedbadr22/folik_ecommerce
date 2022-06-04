import "./product-card-2.css"
import headPhone from "../../../assets/images/headphone.png";

const ProductCard2 = () => {
    return (
        <div className="product-card-2 shadow-sm mt-1 mb-1">
                <div className="image-holder d-flex justify-content-center align-items-center">
                    <img className="product-img-2" src={headPhone} alt="headphone"/>
                </div>
            <div className="product-2-body">
                <span className="product-name">Product Name</span>
                <div className="price">
                    <span className="price-text">$112.00</span>
                    <span className="deleted-price">
                        <del>$150.00</del>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard2;