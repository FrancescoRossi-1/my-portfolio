import Header from "./Header";
import WelcomeComponent from "./WelcomeComponent";
import CurrentWorkExperience from "./CurrentWorkExperience";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MapComponent from "./MapComponent";
import ProgettoRilevante from "./ProgettoRilevante";


const Home = () => {

    return (
        <>
            <Header />
            <WelcomeComponent/>
            <CurrentWorkExperience />
            <ProgettoRilevante/>
            <MapComponent />
        </>
    )
}
export default Home;