const Navbar = () => {
    return (
        <nav className="container-sm navbar navbar-expand-sm bg-hero-section">
            <div className="container-sm ps-0">
                <a className="navbar-brand py-3 px-5 bg-primary-dark-blue-04" href="./"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
                    aria-controls="offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="offcanvas offcanvas-end w-50" id="offcanvas" tabIndex="-1" data-bs-keyboard="false" data-bs-backdrop="false" aria-labelledby="offcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">
                        BCR
                    </h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav text-nowrap">
                        <li className="nav-item">
                            <a className="nav-link text-black mx-2" href="#our-services-section">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black mx-2" href="#why-us-section">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black mx-2" href="#testimonial-section">Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black mx-2" href="#faq-section">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="btn btn-success bg-primary-lime-green-04 text-white ms-2">
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar