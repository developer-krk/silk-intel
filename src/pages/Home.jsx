import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
function Home() {
    return (
        <>
            <Navbar />
            <Hero title="Smarter Textile Sourcing Starts Here"
                description="Compare prices from manufacturers,wholesalers and verified suppliers across India."
                primaryButton="Search Products"
                secondaryButton="Browse Suppliers" />
            <FeaturedProducts/>
        </>
    );
}

export default Home;