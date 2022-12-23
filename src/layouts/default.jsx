import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            { children }
            <Footer />
        </>
    )
}

export default DefaultLayout