import "./featured-brand-style.css"
import brandImage from "../../../assets/images/london-britches.webp"

const FeaturedBrand = () => {
    return (
        <div className="featured-brand-card">
            <div className="img-holder">
                <img src={brandImage} alt=""/>
            </div>
            <div className="brand-title">London Britches</div>
        </div>
    );
};

export default FeaturedBrand;