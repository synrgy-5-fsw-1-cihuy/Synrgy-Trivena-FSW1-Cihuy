const WhyUsSection = () => {
    return (
    <section id="why-us-section" className="container-sm py-5">
        <div className="why-us">
            <h3 className="fw-bold ">
                Why Us?
            </h3>
            <p className="mt-4">Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row my-5">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <img src="assets/images/svg/icon_complete.svg" alt="icon_complete" />
                        <h5 className="card-title fw-bold my-3">Mobil Lengkap </h5>
                            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                            </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <img src="assets/images/svg/icon_price.svg" alt="icon_price" />
                        <h5 className="card-title fw-bold my-3">Harga Murah </h5>
                            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                mobil
                                lain</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <img src="assets/images/svg/icon_24hrs.svg" alt="icon_24hrs" />
                        <h5 className="card-title fw-bold my-3">Layanan 24 Jam</h5>
                            <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia
                                di
                                akhir minggu</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <img src="assets/images/svg/icon_professional.svg" alt="icon_professional" />
                        <h5 className="card-title fw-bold my-3">Sopir Profesional</h5>
                            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
                                waktu
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
} 

export default WhyUsSection