// Import Dependent Component in Home Page
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import PostBanner from "../../Components/PostBanner-S/Post-Banner";
import CategorySection from "../../Components/Category-S/Category-Section";
import MostVisitedSection from "../../Components/Most-Visited-S/Most-Visited-Section"
import TechnologyNews from "../../Components/TechnologyNews-S/Technology-news";
import MainHome from "../../Components/MainHome-S/MainHome";
import ShoppingReview from "../../Components/ShoppingReview-S/ShoppingReview";
import Footer from "../../Components/Footer/Footer";

function Home() {
    return (
        <>
            <HeaderHome />
            <PostBanner />
            <CategorySection />
            <MostVisitedSection />
            <TechnologyNews />
            <MainHome />
            <ShoppingReview />
            <Footer />
        </>
    );
}

export default Home;