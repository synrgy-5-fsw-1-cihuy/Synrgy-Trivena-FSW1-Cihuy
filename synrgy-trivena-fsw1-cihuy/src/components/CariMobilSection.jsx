import { useRef } from "react"
import { useDispatch } from "react-redux"
import { resetFilter, setFilter } from "../stores/slices/cars"
import { DatePicker, InputPicker, InputNumber } from "rsuite"

import "rsuite/dist/rsuite.css";

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

    const optionsDriverType = [
        { value: 'dengan_sopir', label: 'Dengan Sopir' },
        { value: 'tanpa_sopir', label: 'Tanpa Sopir (Lepas Kunci)' },
    ]

    const optionTime = [
        { value: '08:00', label: '08:00' },
        { value: '09:00', label: '09:00' },
        { value: '10:00', label: '10:00' },
        { value: '11:00', label: '11:00' },
        { value: '12:00', label: '12:00' },
    ]

    return (
    <section className="container card" id="search">
        <div className="row py-4 px-3 fs-6">
            <form className="col-11 row" onSubmit={submitHandler}>
                <div className="col-md-3">
                    <label htmlFor="tipe_driver" className="form-label">
                        Tipe Driver
                    </label>
                    <InputPicker placeholder="Pilih Tipe Driver" data={optionsDriverType} size="lg"
                        id="tipe_driver" name="tipe-driver" className="w-100"/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="tanggal_ambil" className="form-label">
                        Tanggal
                    </label>
                    <DatePicker placeholder="Pilih Tanggal" ref={date} size="lg" className="w-100"
                        id="tanggal_ambil" name="tanggal-ambil" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="waktu_ambil" className="form-label">
                        Waktu Jemput/Ambil
                    </label>
                    <InputPicker placeholder="Pilih waktu jemput" ref={time} data={optionTime} size="lg"
                        id="waktu_ambil" name="waktu-ambil" className="w-100" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="jumlah_penumpang" className="form-label">
                        Jumlah Penumpang (optional)
                        <i className="fa fa-user"></i>
                    </label>
                    <InputNumber placeholder="Jumlah Penumpang" ref={capacity} size="lg"
                        id="jumlah_penumpang" name="jumlah-penumpang" className="W-100" />
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