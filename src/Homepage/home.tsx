import Navbar from "../components/Navbar.tsx";
import Slider from "../components/Slider.tsx";
import TopDestination from "../components/TopDestination.tsx";
import MoreToExplore from "../components/MoreToExplore.tsx";


function Home() {
    return (
        <>
            <Navbar/>
            <Slider/>
            <TopDestination/>
            <MoreToExplore/>
        </>
    )
}

export default Home;
