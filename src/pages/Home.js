import NavHeader from "../components/nav-header/NavHeader";
import NavBar from "../components/navBar/NavBar";
import Carousel from "../components/carousel/Carousel";
import FlashDeals from "../components/section/flash-deals/FlashDeals";
import Footer from "../components/footer/Footer";
import Categories from "../components/section/categories/Categories";
import BigDiscounts from "../components/section/big-discounts/BigDiscounts";
import TopRatingFeaturedBrand from "../components/section/top-rating&featured-brands/TopRating&FeaturedBrand";

const Home = () => {
    return (
        <>
            <NavHeader />
            <NavBar />
            <Carousel />
            <Categories />
            <FlashDeals />
            <TopRatingFeaturedBrand />
            <BigDiscounts />
            <Footer />
        </>
    );
};

export default Home;