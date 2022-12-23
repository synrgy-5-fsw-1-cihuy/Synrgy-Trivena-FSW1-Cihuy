const CarsContainers = ({ car }) => {
    return (
    <div className="card col-12 col-lg-4 p-3 my-4">
        <img src={car.image} className="card-img-top w-100" style={{ height: '220px', objectFit: 'cover' }} alt={car.image} />
        <div className="card-body mt-3 d-grid">
            <h5>{car.manufacture} {car.model} / {car.type}</h5>
            <h4 className="fw-bold">Rp {car.rentPerDay} / hari</h4>
            
            <div className="overflow-hidden" style={{minHeight: '70px'}}>
                {car.description}
            </div>

            <div className="my-3">
                <p>
                  <img src="assets/images/svg/fi_calendar.svg" alt="fi_calendar" className="me-2" />
                  {car.capacity} Orang
                </p>
                <p>
                  <img src="assets/images/svg/fi_settings.svg" alt="fi_settings" className="me-2" />
                  {car.transmission}
                </p>
                <p>
                  <img src="assets/images/svg/fi_users.svg" alt="fi_users" className="me-2" />
                  Tahun {car.year}
                </p>
            </div>
            
            <a href="#" className="btn btn-success py-3 bg-primary-lime-green-04 text-white">Pilih Mobil</a>
        </div>
    </div>
    )
}

export default CarsContainers