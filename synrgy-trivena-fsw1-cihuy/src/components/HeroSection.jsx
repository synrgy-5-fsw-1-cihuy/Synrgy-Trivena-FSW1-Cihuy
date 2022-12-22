const MainSection = () => {
    return (
        <section className="container-xxl px-0" id="hero-section">
            <div className="row">
                <div className="col-md-6 my-auto">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-11">
                            <h2 className="fw-bold">
                                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                            </h2>
                            <p className="w-75 fs-6 mt-4">
                                Selamat datang di Binar Car Rental. Kami menyediakan
                                mobil kualitas terbaik dengan harga terjangkau.
                                Selalu siap melayani kebutuhanmu untuk sewa mobil
                                selama 24 jam.
                            </p>
                            <a href="./cars" className="btn btn-success bg-primary-lime-green-04 text-white fw-bold">
                                Mulai Sewa Mobil
                            </a>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 pe-0 me-0">
                    <img src="assets\images\img_car.png" alt="img_car" className="w-100" />
                </div>
            </div>
        </section>
    )
}

export default MainSection