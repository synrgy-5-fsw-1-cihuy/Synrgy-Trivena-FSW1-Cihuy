import { useRef } from "react"
import { useDispatch } from "react-redux"
import { resetFilter, setFilter } from "../stores/slices/cars"

const CariMobilSection = () => {
    const date = useRef()
    const time = useRef()
    const capacity = useRef()

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        
        const filterVar = {}
        
        if (date.current.value == '') {
            alert('Tanggal ambil harus diisi!')
            return
        }
        
        filterVar.date = date.current.value
        
        if (time.current.value == 'default') {
            alert('Waktu ambil harus diisi!')
            return
        }
        
        filterVar.time = time.current.value

        if (capacity.current.value != '') {
            filterVar.capacity = capacity.current.value
        } else {
            filterVar.capacity = ""
        }
        
        dispatch(setFilter(filterVar))
    }

    const resetHandler = () => {
        dispatch(resetFilter)
    }

    return (
    <section className="container card" id="search">
        <div className="row py-4 px-3 fs-6">
            <form className="col-11 row" onSubmit={submitHandler}>
                <div className="col-md-3">
                    <label htmlFor="tipe_driver" className="form-label">
                        Tipe Driver
                    </label>
                    <select className="chosen-select-no-single fs-6" id="tipe_driver" name="tipe-driver">
                        <option value="default" className="d-none">Pilih Tipe Driver</option>
                        <option value="1">Dengan Sopir</option>
                        <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="tanggal_ambil" className="form-label">
                        Tanggal
                    </label>
                    <input className="form-select text-secondary" id="tanggal_ambil" type="text" name="tanggal-ambil" placeholder="Pilih Tanggal" ref={date}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="waktu_ambil" className="form-label">
                        Waktu Jemput/Ambil
                    </label>
                    <select id="waktu_ambil" name="waktu-ambil" className="chosen-select-no-single time" ref={time}>
                        <option value="default" className="d-none">Pilih waktu jemput</option>
                        <option>08:00</option>
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="jumlah_penumpang" className="form-label">
                        Jumlah Penumpang (optional)
                        <i className="fa fa-user"></i>
                    </label>
                    <input className="form-select" id="jumlah_penumpang" type="number" name="jumlah-penumpang"
                        placeholder="Jumlah Penumpang" ref={capacity}/>
                </div>
            </form>
            <div className="col-1 pe-0">
                <div className="col-12 d-grid">
                    <label className="form-label">
                        &nbsp;
                    </label>
                    <button className="px-0 btn btn-success bg-primary-lime-green-04 text-white fsw-bolder"
                            id="cari_mobil">Cari Mobil</button>
                    <button className="px-0 btn btn-secondary text-white fsw-bolder"
                        id="reset_cari_mobil" onClick={resetHandler}> Reset </button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CariMobilSection