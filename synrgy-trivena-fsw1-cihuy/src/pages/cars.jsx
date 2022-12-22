import CarsContainer from "../components/CarsContainer"
import CariMobilSection from "../components/CariMobilSection"
import DefaultLayout from "../layouts/default"
import MainSection from "../components/HeroSection"

const Cars = () => {
    return (
        <DefaultLayout>
            <MainSection />
            <CariMobilSection />
            <CarsContainer />
        </DefaultLayout>
    )
}

export default Cars