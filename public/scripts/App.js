class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn"); 
    this.carContainerElement = document.getElementById("cars-container");
    this.cariButton = document.getElementById('cari_mobil');
    this.tipeDriver = document.getElementById('tipe_driver');
    this.tanggalAmbil = document.getElementById('tanggal_ambil');
    this.waktuAmbil = document.getElementById('waktu_ambil');
    this.jumlahPenumpang = document.getElementById('jumlah_penumpang')

  }

  async init() {
    await this.load();
    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.cariButton.addEventListener('click', this.filterCar, true);
  }

  run = () => {
    console.log("BEFORE :", Car.list.length);
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add('col-12');
      node.classList.add('col-lg-4');
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  filterCar = async (e) => {
    e.preventDefault();
    this.clear()

    if (this.tipeDriver.value == "") {
      alert('Tipe driver harus diisi!');
      return
    }

    if (this.tanggalAmbil.value == "") {
      alert('Tanggal ambil harus diisi!');
      return
    }

    if (this.waktuAmbil.value == "") {
      alert('Waktu ambil harus diisi!');
      return
    }

    let tanggalTWaktuAmbil = Date.parse(this.tanggalAmbil.value + "T" + this.waktuAmbil.value);

    let filter = await Binar.listCars((data) => {
      if (tanggalTWaktuAmbil >= data.availableAt && data.capacity >= parseInt(this.jumlahPenumpang.value)) {
        return data.availableAt && data.capacity;
      }
    });

    Car.init(filter);
    this.run();

  };

  async load() {
    let cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
