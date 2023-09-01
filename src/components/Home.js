import Header from "./Header";
import WelcomeComponent from "./WelcomeComponent";
import CurrentWorkExperience from "./CurrentWorkExperience";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectCarousel from "./ProjectCarouselComponent";
import MapComponent from "./MapComponent";
import ProgettoRilevante from "./ProgettoRilevante";


const Home = () => {

    return (
        <>
            <Header />
            <WelcomeComponent/>
            <CurrentWorkExperience />
            <ProgettoRilevante/>
            <ProjectCarousel />
            <MapComponent />
        </>
    )
}
export default Home;