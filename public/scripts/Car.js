class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card p-3 my-4">
        <img src="${this.image}" class="card-img-top w-100" alt="${this.image}" height="300">
        <div class="card-body mt-3 d-grid h-100">
            <h5>${this.manufacture} ${this.model} / ${this.type}</h5>
            <h4 class="fw-bold">Rp ${this.rentPerDay} / hari</h4>
            
            <div class="overflow-hidden" style="min-height: 90px;">
                ${this.description}
            </div>

            <div class="my-3">
                <p>
                  <img src="./assets/images/svg/fi_calendar.svg" alt="fi_calendar" class="me-2">
                  ${this.capacity} Orang
                </p>
                <p>
                  <img src="./assets/images/svg/fi_settings.svg" alt="fi_settings" class="me-2">
                  ${this.transmission}
                </p>
                <p>
                  <img src="./assets/images/svg/fi_users.svg" alt="fi_users" class="me-2">
                  Tahun ${this.year}
                </p>
            </div>
            
            <a href="#" class="btn btn-success py-3 bg-primary-lime-green-04 text-white" >Pilih Mobil</a>
        </div>
    </div>
    `;
  }
}

/* `
     <p>id: <b>${this.id}</b></p>
     <p>plate: <b>${this.plate}</b></p>
     <p>manufacture: <b>${this.manufacture}</b></p>
     <p>model: <b>${this.model}</b></p>
     <p>available at: <b>${this.availableAt}</b></p>
     <img src="${this.image}" alt="${this.manufacture}" width="64px">
   `;
*/

