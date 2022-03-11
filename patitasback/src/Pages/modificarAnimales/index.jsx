import './modificar.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import React from 'react';
import { Row, Col, Card, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from "react-router-dom";

function PageModificarAnimales(props) {

  const userToken = useSelector((state) => {
    return state.auth.userToken;
  });

  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  };

  let { mascota_id } = useParams();

  const [perros, setPerros] = useState([]);
  const [form, setForm] = useState({
    mascota_act: "",
    mascota_age: "",
    mascota_est: "",
    mascota_hair: "",
    mascota_hty: "",
    mascota_img: "",
    mascota_nom: "",
    mascota_sex: "",
    mascota_tall: ""
  })
  function putMascota(mascota_id, form) {
    axios
      .put(`http://localhost:8000/perfilGet/${mascota_id}`, form, config)
      .then((response) => {
        alert('la mascota se modifico correctamente');
      })
      .catch(() => {
        alert('Por favor intentalo nuevamente');
      });
  }
  function getMascota(mascota_id) {
    axios
      .get(`http://localhost:8000/mascotas/${mascota_id}`)
      .then((response) => {
        setPerros(response.data);
      })
      .catch(() => {
        alert('Por favor intentalo nuevamente');
      });
  }


  function putData(e) {
    e.preventDefault()
    putMascota(mascota_id, form)
    console.log(form, mascota_id)
  }

  useEffect(() => {
    getMascota(mascota_id);
  }, []);

  // const get_id = useRef(null);
  // const put_id = useRef(null);
  // const put_status = useRef(null);
  // const put_name = useRef(null);
  // const put_photo = useRef(null);
  // const put_age = useRef(null);
  // const put_tall = useRef(null);
  // const put_sex = useRef(null);
  // const put_activity = useRef(null);
  // const put_hair = useRef(null);
  // const put_history = useRef(null);

  // function putData(e) {
  //     e.preventDefault();
  //     const id_put = put_id.current.value;
  //     const mascota = {
  //         status: put_status.current.value,
  //         name: put_name.current.value.toUpperCase(),
  //         photo: put_photo.current.value,
  //         age: put_age.current.value,
  //         tall: put_tall.current.value,
  //         sex: put_sex.current.value,
  //         activity: put_activity.current.value,
  //         hair: put_hair.current.value,
  //         history: put_history.current.value
  //     }
  //     putMascota(id_put, mascota);
  // }
  // function getData() {
  //     const id_get = get_id.current.value;
  //     getMascota(id_get)
  // }

  return (
  
    <React.Fragment>

      {/* {isValid ? <Alert variant="success">Hurray! You're a genius.</Alert>
          : <Alert variant="danger">Oops! Try again</Alert>}
  
        <div className="alert bg-success alert-dismissible " role="alert"> <button type="button" className="close"
          data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
          <strong>Success!</strong> Product successfully added. </div> */}
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card>
              <Card.Header>
                Modificar Mascota
              </Card.Header>
              <Card.Body>
                <form action="" onSubmit={putData} className="form-horizontal">
                  <Form.Group>
                    <label>Nombre</label>
                    <input type="text" placeholder='Nombre del animal' className="form-control form-control-rounded"
                      required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_nom: e.target.value.toUpperCase() }))} />
                  </Form.Group>
                  <Form.Group>
                    <label>Estado</label>
                    <select name="" className="form-control m-b" required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_est: e.target.value }))} >
                      <option selected hidden>Disponibilidad</option>
                      <option value={false} >Disponible</option>
                      <option value={true} >No disponible</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>URL Foto</label>
                    <input type="text" required placeholder='Foto' accept="image/png, image/jpeg" className="form-control form-control-rounded" 
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_img: e.target.value }))} />
                  </Form.Group>
                  <Form.Group>
                    <label>Edad</label>
                    <input type="number" min={0} placeholder='Edad' className="form-control form-control-rounded" required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_age: e.target.value }))} />
                  </Form.Group>


                  <Form.Group>
                    <label>Tamaño</label>
                    <select className="form-control m-b" required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_tall: e.target.value }))
                      }>
                      <option selected hidden>Tamaño</option>
                      <option value='PEQUEÑO'>Pequeño</option>
                      <option value='MEDIANO'>Mediano</option>
                      <option value='GRANDE'>Grande</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>Sexo</label>
                    <select className="form-control m-b" required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_sex: e.target.value }))
                      }>
                      <option selected hidden>Sexo</option>
                      <option value='HEMBRA'>Hembra</option>
                      <option value='MACHO'>Macho</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>Nivel de actividad</label>
                    <select className="form-control m-b" required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_act: e.target.value }))
                      }>
                      <option selected hidden>Nivel de actividad</option>
                      <option value='BAJO'>Bajo</option>
                      <option value='MEDIO'>Medio</option>
                      <option value='ALTO'>Alto</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>Largo de pelo</label>
                    <select className="form-control m-b" required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_hair: e.target.value }))
                      }>
                      <option selected hidden>Largo de pelo</option>
                      <option value='LARGO'>Largo</option>
                      <option value='CORTO'>Corto</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>Descripcion</label>

                    <Form.Control
                      as="textarea"
                      placeholder="Breve Historia de la Mascota"
                      style={{ height: '100px' }}
                      required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_hty: e.target.value }))}
                    />

                  </Form.Group>
                  <Form.Group>
                    <button className="btn btn-success btn-icon" type='submit'>Guardar</button>
                  </Form.Group>


                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default PageModificarAnimales