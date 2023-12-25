import axios from "axios";
import {useEffect, useState} from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";


const CardCariMobil = ({onActiveHandler = () => {}, onBlurHandler = () => {}, setCar = () => {}, disable = false}) => {
    const [formData, setFormData] = useState({name : "", category : "", price : "", status : ""});
    const notDisable = disable == false;

    let [searchParams, setSearchParams] = useSearchParams();

    const isEmptyParam = () => {
        let parameterData = Object.fromEntries([...searchParams])

        return Object.keys(parameterData).length === 0
    }
    useEffect(() => {
        if(isEmptyParam()) return;

        let parameterData = Object.fromEntries([...searchParams])
        const getData = async () => {
            const res = await axios.get("https://api-car-rental.binaracademy.org/customer/v2/car", { params: parameterData});
            setCar(res.data)
        }

        getData();

    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        setSearchParams(formData);

        axios.get("https://api-car-rental.binaracademy.org/customer/v2/car", { params: formData})
        .then((res) =>  setCar(res.data))
        .finally(() => onBlurHandler())
    }
    return (
        <div className="shadow p-4 bg-body-tertiary rounded" style={{position:"relative", zIndex:"9999"}}>
            <Form onSubmit={submitHandler}>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={2} controlId="formGridEmail">
                        <Form.Label>Nama Mobil</Form.Label>
                        <Form.Control size="md" type="text" placeholder={notDisable ? "Ketik nama/tipe mobil" : ""} onFocus={onActiveHandler} onBlur={onBlurHandler} value={formData.name} onChange={ (e) => setFormData({...formData, name : e.target.value})} disabled={disable}/>
                    </Form.Group>

                    <Form.Group as={Col} xs={3} controlId="formGridEmail">
                        <Form.Label>Kategori</Form.Label>
                        <Form.Select size="md" onFocus={onActiveHandler} onBlur={onBlurHandler} value={formData.category} onChange={ (e) => setFormData({...formData, category : e.target.value})} disabled={disable}>
                            {notDisable && (
                                <>
                                    <option>Masukan Kapasitas Mobil</option>
                                    <option value="small">2 - 4 Orang</option>
                                    <option value="medium">4 - 6 Orang</option>
                                    <option value="large">6 - 8 Orang</option>
                                </>
                            )}
                            
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={3} controlId="formGridEmail">
                        <Form.Label>Harga</Form.Label>
                        <Form.Select size="md" onFocus={onActiveHandler} onBlur={onBlurHandler} value={formData.price} onChange={ (e) => setFormData({...formData, price : e.target.value})} disabled={disable}>
                            {notDisable && (
                                <>
                                    <option>Masukan Harga Sewa Per Hari</option>
                                    <option value="1212">100.000</option>
                                    <option value="11111">200.000</option>
                                    <option value="300000">300.000</option>
                                </>
                            )}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={2} controlId="formGridEmail">
                        <Form.Label>Status</Form.Label>
                        <Form.Select size="md" onFocus={onActiveHandler} onBlur={onBlurHandler} value={formData.status} onChange={ (e) => setFormData({...formData, status : e.target.value})} disabled={disable}>
                        {notDisable && (
                            <>
                                <option value="true">Disewa</option>
                                <option value="false">Tidak Disewa</option>
                            </>
                        )}
                        </Form.Select>
                    </Form.Group>

                    <Col className="d-flex align-items-end" xs={2}>
                        {
                            isEmptyParam() 
                                ? (<Button size="md" type="submit" variant="success" onFocus={onActiveHandler} onBlur={onBlurHandler} disabled={disable}>Cari Mobil</Button>) 
                                : (<Button variant="outline-info" onFocus={onActiveHandler} onBlur={onBlurHandler} disabled={disable}>Edit</Button>)
                        }
                    </Col>
                    {/* </Form.Group> */}

                </Row>
            </Form>
        </div>
    );
};

export default CardCariMobil;
