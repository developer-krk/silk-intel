import heroImg from "../assets/hero.webp";
import "./Hero.css";
function HeroButtons({ primaryButton, secondaryButton }) {
    return (
        <div className="hero-buttons">
            <button>{primaryButton}</button>
            <button>{secondaryButton}</button>
        </div>

    );
}
function HeroImage() {
    return (
        <div className="hero-image">
            <img src={heroImg} alt="Silk fabric illustration" /></div>
    )
}
function Hero({ title, description, primaryButton, secondaryButton }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-badge">
                    🇮🇳 India's Textile Intelligence Platform
                </span>
                <h1>
                    {title}
                </h1>
                <p>{description}
                </p>
                <HeroButtons primaryButton={primaryButton} secondaryButton={secondaryButton} />
            </div>
            <HeroImage />
        </section>
    );
}
export default Hero;