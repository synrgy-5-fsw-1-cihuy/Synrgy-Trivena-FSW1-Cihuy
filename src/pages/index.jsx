import DefaultLayout from "../layouts/default"
import FaqSection from "../components/FaqSection"
import GettingStartedSection from "../components/GettingStartedSection"
import MainSection from "../components/HeroSection"
import OurServicesSection from "../components/OurServicesSection"
import TestimonialSection from "../components/TestimonialSection"
import WhyUsSection from "../components/WhyUsSection"

const Index = () => {
    return (
        <DefaultLayout>
            <MainSection />
            <OurServicesSection />
            <WhyUsSection />
            <TestimonialSection />
            <GettingStartedSection />
            <FaqSection />
        </DefaultLayout>
    )
}

export default Index