import NavHeader from "../components/nav-header/NavHeader";
import NavBar from "../components/navBar/NavBar";
import Carousel from "../components/carousel/Carousel";
import FlashDeals from "../components/section/flash-deals/FlashDeals";
import Footer from "../components/footer/Footer";
import Categories from "../components/section/categories/Categories";

const Home = () => {
    return (
        <>
            <NavHeader />
            <NavBar />
            <Carousel />
            <Categories />
            <FlashDeals />
            <Footer />
        </>
    );
};

export default Home;