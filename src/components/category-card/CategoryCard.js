import "./category-card-style.css"
import catImage from "../../assets/images/1.webp"

const CategoryCard = () => {
    return (
        <a href="/" className="category-card shadow-sm rounded">
            <img src={catImage} alt="category name"/>
            <span className="category-name">Grouser</span>
        </a>
    );
};

export default CategoryCard;