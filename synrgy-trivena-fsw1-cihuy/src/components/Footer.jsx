const Footer = () => {
    return (
    <footer className="container-sm py-5">
        <div className="row">
            <div className="col-md-3">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <a className="text-black text-decoration-none d-block mb-3"
                    href="mailto:binarcarrental@gmail.com">binarcarrental@gmail.com</a>
                <a className="text-black text-decoration-none d-block mb-3" href="tel:+6281233334808">081-233-334-808</a>
            </div>
            <div className="col-md-2">
                <ul className="list-unstyled">
                    <li className="mb-3"><a className="text-black text-decoration-none" href="#our-services-section">Our
                            Services</a></li>
                    <li className="mb-3"><a className="text-black text-decoration-none" href="#why-us-section">Why
                            Us</a></li>
                    <li className="mb-3"><a className="text-black text-decoration-none"
                            href="#testimonial-secction">Testimonial</a></li>
                    <li className="mb-3"><a className="text-black text-decoration-none" href="#faq-section">FAQ</a></li>
                </ul>
            </div>
            <div className="col-md-4">
                <p>Connect with us</p>
                <ul className="list-unstyled d-flex">
                    <li className="me-3"><a href=""><img src="assets/images/svg/icon_facebook.svg" alt="icon_facebook"/></a>
                    </li>
                    <li className="me-3"><a href=""><img src="assets/images/svg/icon_instagram.svg"
                                alt="icon_instagram"/></a></li>
                    <li className="me-3"><a href=""><img src="assets/images/svg/icon_twitter.svg" alt="icon_twitter"/></a>
                    </li>
                    <li className="me-3"><a href=""><img src="assets/images/svg/icon_mail.svg" alt="icon_mail"/></a></li>
                    <li className="me-3"><a href=""><img src="assets/images/svg/icon_twitch.svg" alt="icon_twitch"/></a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <p>Copyright Binar 2022</p>
                <a className="navbar-brand py-2 px-5 bg-primary-dark-blue-04" href="#hero-section"></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer