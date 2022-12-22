import OwlCarousel from "react-owl-carousel"

const owlResponsive = {
        0: { items: 1 },
        600: { items: 2.1 },
        1000: { items: 2.1 }
}


const TestimonialSection = () => {

    return (
    <section id="testimonial-section" className="container-xxl py-5">
        <h3 className="fw-bold text-center">Testimonial</h3>
        <p className="text-center mt-3 mb-5">Berbagai review positif dari para pelanggan kami</p>
        <OwlCarousel className="owl-theme" center={true} loop={true} margin={20} nav={true} item={3} responsive={owlResponsive}>
            <div className="item">
                <div className="card p-4 bg-card-testimonial">
                    <div className="row">
                        <div className="col-md-3 my-auto mx-auto">
                            <img className="card-img m-auto" src="assets/images/img_photo_1.png" alt="Card image" styled="width: 7rem; height: 7rem" />
                        </div>
                        <div className="card-body col-md-9">
                            <div className="d-flex w-25 star mb-3">
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                            </div>
                            <p className="card-text pe-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed
                                do eiusmod”</p>
                            <h6 className="card-title fw-bold">John Dee 32, Bromo</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card p-4 bg-card-testimonial">
                    <div className="row">
                        <div className="col-md-3 my-auto mx-auto">
                            <img className="card-img m-auto" src=" assets/images/img_photo_2.png" alt="Card image" styled="width: 7rem; height: 7rem"/>
                        </div>
                        <div className="card-body col-md-9">
                            <div className="d-flex w-25 star mb-3">
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                            </div>
                            <p className="card-text pe-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed
                                do eiusmod”</p>
                            <h6 className="card-title fw-bold">John Dee 32, Bromo</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card p-4 bg-card-testimonial">
                    <div className="row">
                        <div className="col-md-3 my-auto mx-auto">
                            <img className="card-img m-auto" src=" assets/images/img_photo_3.png" alt="Card image" styled="width: 7rem; height: 7rem" />
                        </div>
                        <div className="card-body col-md-9">
                            <div className="d-flex w-25 star mb-3">
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                                <img src="assets/images/svg/Star.svg" alt="Star" />
                            </div>
                            <p className="card-text pe-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed
                                do eiusmod”</p>
                            <h6 className="card-title fw-bold">John Dee 32, Bromo</h6>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    </section>
    )
}

export default TestimonialSection