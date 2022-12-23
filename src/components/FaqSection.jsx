const FaqSection = () => {
    return (
    <section id="faq-section" className="container-sm py-5">
        <div className="row">
            <div className="col-md-5">
                <h3 className="fw-bold">
                    Frequently Asked Question
                </h3>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-md-7">
                <div className="card my-3">
                    <div className="card-header">
                        <a className="btn d-flex justify-content-between" data-bs-toggle="collapse" href="#faq-1">
                            <p className="mb-0 text-wrap text-start me-3">
                                Apa saja syarat yang dibutuhkan?
                            </p>
                            <img src="assets/images/svg/menu_down.svg" alt="menu_down" />
                        </a>
                    </div>
                    <div id="faq-1" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex
                            ea commodo consequat.
                        </div>
                    </div>
                </div>
                <div className="card my-3">
                    <div className="card-header">
                        <a className="btn d-flex justify-content-between" data-bs-toggle="collapse" href="#faq-2">
                            <p className="mb-0 text-wrap text-start me-3">
                                Berapa hari minimal sewa mobil lepas kunci?
                            </p>
                            <img src="assets/images/svg/menu_down.svg" alt="menu_down" />
                        </a>

                    </div>
                    <div id="faq-2" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex
                            ea commodo consequat.
                        </div>
                    </div>
                </div>
                <div className="card my-3">
                    <div className="card-header">
                        <a className="btn d-flex justify-content-between" data-bs-toggle="collapse" href="#faq-3">
                            <p className="mb-0 text-wrap text-start me-3">
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                            </p>
                            <img src="assets/images/svg/menu_down.svg" alt="menu_down" />
                        </a>
                    </div>
                    <div id="faq-3" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex
                            ea commodo consequat.
                        </div>
                    </div>
                </div>
                <div className="card my-3">
                    <div className="card-header">
                        <a className="btn d-flex justify-content-between" data-bs-toggle="collapse" href="#faq-4">
                            <p className="mb-0 text-wrap text-start me-3">
                                Apakah Ada biaya antar-jemput?
                            </p> <img src="assets/images/svg/menu_down.svg" alt="menu_down" />
                        </a>
                    </div>
                    <div id="faq-4" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex
                            ea commodo consequat.
                        </div>
                    </div>
                </div>
                <div className="card my-3">
                    <div className="card-header">
                        <a className="btn d-flex justify-content-between" data-bs-toggle="collapse" href="#faq-5">
                            <p className="mb-0 text-wrap text-start me-3">
                                Bagaimana jika terjadi kecelakaan
                            </p> <img src="assets/images/svg/menu_down.svg" alt="menu_down" />
                        </a>
                    </div>
                    <div id="faq-5" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex
                            ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default FaqSection