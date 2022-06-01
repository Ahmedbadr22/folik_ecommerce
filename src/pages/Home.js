import NavHeader from "../components/nav-header/NavHeader";
import NavBar from "../components/navBar/NavBar";
import Carousel from "../components/carousel/Carousel";
import FlashDeals from "../components/section/flash-deals/FlashDeals";

const Home = () => {
    return (
        <>
            <NavHeader />
            <NavBar />
            <Carousel />
            <FlashDeals />
        </>
    );
};

export default Home;