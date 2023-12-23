import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const CardCariMobil = ({onActiveHandler, onBlurHandler}) => {
    return (
        <div class="shadow p-4 bg-body-tertiary rounded" style={{position:"relative", zIndex:"9999"}}>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={2} controlId="formGridEmail">
                        <Form.Label>Nama Mobil</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Ketik nama/tipe mobil" onFocus={onActiveHandler} onBlur={onBlurHandler} />
                    </Form.Group>

                    <Form.Group as={Col} xs={3} controlId="formGridEmail">
                        <Form.Label>Kategori</Form.Label>
                        <Form.Select size="lg" defaultValue="Choose..."  onFocus={onActiveHandler} onBlur={onBlurHandler}>
                            <option>Masukan Kapasitas Mobil</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={3} controlId="formGridEmail">
                        <Form.Label>Harga</Form.Label>
                        <Form.Select size="lg" defaultValue="Choose..."  onFocus={onActiveHandler} onBlur={onBlurHandler}>
                            <option>Masukan Harga Sewa Per Hari</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={2} controlId="formGridEmail">
                        <Form.Label>Status</Form.Label>
                        <Form.Select size="lg" defaultValue="Choose..."  onFocus={onActiveHandler} onBlur={onBlurHandler}>
                            <option>Disewa</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Col className="d-flex align-items-end" xs={2}>
                        <Button size="lg" variant="success" onFocus={onActiveHandler} onBlur={onBlurHandler}>Cari Mobil</Button>{' '}
                    </Col>
                    {/* </Form.Group> */}

                </Row>
            </Form>
        </div>
    );
};

export default CardCariMobil;
