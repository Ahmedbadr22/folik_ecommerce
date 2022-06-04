import "./categories-style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTableCellsLarge, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import CategoryCard from "../../category-card/CategoryCard";


const Categories = () => {
    return (
        <div className="categories-section">
            <div className="container pt-5 pb-5">
                <div className="header mb-2">
                    <div className="section-title">
                        <FontAwesomeIcon className="section-icon" icon={faTableCellsLarge}/>
                        <span className="title">Categories</span>
                    </div>
                    <a href="/" className="view-all">
                        <span className="view-text">View all</span>
                        <FontAwesomeIcon className="view-icon" icon={faCaretRight}/>
                    </a>
                </div>
                <div className="categories-body">
                    <div className="row">
                        <div className="col-lg-2 mt-3">
                            <CategoryCard />
                        </div>
                        <div className="col-lg-2 mt-3">
                            <CategoryCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;