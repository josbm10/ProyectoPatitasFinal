import React from 'react';
import { Row, Col, Card, Table, Button, Container } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import './administrar.css'

function PageAdministrar() {

    const history=useHistory();

    const [dog, setDog] = useState([]);

    const userToken = useSelector((state) => {
        return state.auth.userToken;
    });
    const userData = useSelector((state) => {
        return state.auth.userData;
    });

    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    };

    function getMascota(userData) {
        axios
            .get(`http://localhost:8000/perfil/${userData.id}`, config)
            .then((response) => {
                console.log(response.data);
                setDog(response.data)
            })
            .catch((e) => {
                console.log(e)
            });
    }

    function deleteMascota(mascota) {
        axios
            .delete(`http://localhost:8000/perfilGet/${mascota}`, config)
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
            .catch((e) => {
                console.log(e)
            });
    }


    useEffect(() => {
        getMascota(userData);
    }, []);

    return (
        <div className='administrar_container' >


            <React.Fragment>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col md="12">
                            <Card>
                                <Card.Header>
                                    <div className="float-right mt-10">
                                        <NavLink to='/administrativo/agregar_mascota' className="btn btn-primary btn-rounded box-shadow btn-icon"><i className="fa fa-plus" /> Agregar Mascota</NavLink>
                                    </div>
                                    Mis Mascotas
                                </Card.Header>
                                <Card.Body>
                                    <Table id="datatable1" className="table table-striped dt-responsive nowrap table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">
                                                    <strong>ID Adopcion</strong>
                                                </th>
                                                <th className="text-center">
                                                    <strong>Fecha</strong>
                                                </th>

                                                <th className="text-center">
                                                    <strong>Mascota</strong>
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dog.map((value) => {
                                                return (
                                                    <tr key={value.adopcion_id}>
                                                        <td className="text-center">{value.adopcion_id}</td>
                                                        <td className="text-center">{value.adopcion_fech}</td>
                                                        <td className="text-center">{value.mascota}</td>
                                                        <td className="text-center">
                                                            <div>
                                                                <Button variant="success" size="sm" onClick={() => { history.push(`/administrativo/modificar_mascota/${value.mascota}`) }}>
                                                                    Editar
                                                                </Button>
                                                                {' '}
                                                                <Button variant="danger" size="sm" onClick={() => { deleteMascota(value.mascota) }}>
                                                                    Eliminar
                                                                </Button>
                                                            </div>

                                                        </td>
                                                    </tr>

                                                )
                                            }
                                            )}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        </div>
    )
}
export default PageAdministrar;