import { useRef} from "react"
import { useDispatch } from "react-redux"
import { setFilter } from "../stores/slices/cars"
import { Form, DatePicker, Button, InputPicker, Schema} from "rsuite"

import "rsuite/dist/rsuite.css";
import { FormGroup } from "react-bootstrap";

const { StringType, DateType, NumberType } = Schema.Types;

var tanggalAmbil, waktuAmbil, jumlahPenumpang;
const model = Schema.Model({
    tipe_driver: StringType()
        .isRequired('Waktu ambil harus diisi!'),
    tanggal_ambil: DateType()
        .addRule((value, data) => {
            tanggalAmbil = value.toISOString()
        })
        .isRequired('Tanggal ambil harus diisi!'),  
    waktu_ambil: StringType()
        .addRule((value, data) => {
            waktuAmbil = value
        })
        .isRequired('Waktu ambil harus diisi!'),
    jumlah_penumpang: NumberType()
        .addRule((value, data) => {
            jumlahPenumpang = value
        })
});

const CariMobilSection = () => {
    const formRef = useRef();

    const dispatch = useDispatch()
    
    const handleSubmit = () => {
        formRef.current.checkAsync().then(result => {
            console.log(result);

        const filterVar = {}
        
        filterVar.date = tanggalAmbil.slice(0, 10);
        filterVar.time = waktuAmbil

        if(jumlahPenumpang != '') {
            filterVar.capacity = jumlahPenumpang
        } else {
            filterVar.capacity = '1'
        }
                    
            dispatch(setFilter(filterVar))
            console.log(filterVar);
    });
        
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
        <Form className="row py-4 px-3 fs-6" ref={formRef} model={model} >
            <div className="col-lg-11 row">
                <FormGroup className="col-lg-3 my-2">
                    <Form.ControlLabel controlid="tipe_driver" className="form-label">
                        Tipe Driver
                    </Form.ControlLabel>
                    <Form.Control accepter={InputPicker} checkAsync placeholder="Pilih Tipe Driver" data={optionsDriverType} size="lg"
                        id="tipe_driver" name="tipe_driver" className="w-100"/>
                </FormGroup>
                <FormGroup className="col-lg-3 my-2">
                    <Form.ControlLabel controlid="tanggal_ambil" className="form-label">
                        Tanggal
                    </Form.ControlLabel>
                    <Form.Control accepter={DatePicker} checkAsync placeholder="Pilih Tanggal" size="lg" className="w-100"
                        id="tanggal_ambil" name="tanggal_ambil" />
                </FormGroup>
                <FormGroup className="col-lg-3 my-2">
                    <Form.ControlLabel controlid="waktu_ambil" className="form-label">
                        Waktu Jemput/Ambil
                    </Form.ControlLabel>
                    <Form.Control accepter={InputPicker} checkAsync placeholder="Pilih waktu jemput" data={optionTime} size="lg"
                        id="waktu_ambil" name="waktu_ambil" className="w-100" />
                </FormGroup>
                <FormGroup className="col-lg-3 my-2">
                    <Form.ControlLabel controlid="jumlah_penumpang" className="form-label">
                        Jumlah Penumpang (optional)
                        <i className="fa fa-user"></i>
                    </Form.ControlLabel>
                    <Form.Control checkAsync placeholder="Jumlah Penumpang" size="lg"
                        id="jumlah_penumpang" name="jumlah_penumpang" className="w-100" />
                </FormGroup>
            </div>
            <div className="col-lg-1 pe-0 my-2">
                <FormGroup className="col-12 d-grid">
                    <Form.ControlLabel className="form-label">
                        &nbsp;
                    </Form.ControlLabel>
                    <Button type="submit" className="w-100 px-0 btn btn-success bg-primary-lime-green-04 text-white fsw-bolder"
                        id="cari_mobil" onClick={handleSubmit}>Cari Mobil</Button>
                </FormGroup>
            </div>
        </Form>
    </section>
    )
}

export default CariMobilSection