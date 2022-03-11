import './registro.css';
import { useState,useRef } from 'react';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Row, Col, Card, Form, Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';

function PageRegistroAnimales() {

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

  console.log(config)

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

  const mail = useRef();

  function saveMascota(form) {

    axios
      .post('http://localhost:8000/perfilPost', form, config)
      .then((response) => {

        axios
          .post('http://localhost:8000/adopcion', {
            user: userData.id,
            mascota: response.data.content.mascota_id
          }, config)
          .then((response) => {
            alert('la mascota se guardo correctamente');
          })
          .catch(function (error) {
            alert('Por favor intentalo nuevamente');
          })

      })
      .catch(function (error) {

        alert('Por favor intentalo nuevamente');
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);

        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm('service_diwuipc', 'template_ekjh745', mail.current, '4TRf6lXXaBFXt6_AX')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    saveMascota(form);
  }

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
                Agregar Mascota
              </Card.Header>
              <Card.Body>
                <form ref={mail} action="" onSubmit={handleSubmit} className="form-horizontal">
                  <Form.Group>
                    <label>Nombre</label>
                    <input type="text" placeholder='Nombre del animal' className="form-control form-control-rounded" name='nombre' required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_nom: e.target.value.toUpperCase() }))} />
                  </Form.Group>
                  <Form.Group>
                    <label>Estado</label>
                    <select name="estado" className="form-control m-b" required onChange={(e) =>
                      setForm((state) => ({ ...state, mascota_est: e.target.value }))} >
                      <option selected hidden>Disponibilidad</option>
                      <option value={false}>Disponible</option>
                      <option value={true}>No disponible</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>URL Foto</label>
                    <input name='foto' type="text" placeholder='Foto' className="form-control form-control-rounded" required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_img: e.target.value }))} />
                  </Form.Group>
                  <Form.Group>
                    <label>Edad</label>
                    <input name='edad' type="number" min={0} placeholder='Edad' className="form-control form-control-rounded" required
                      onChange={(e) =>
                        setForm((state) => ({ ...state, mascota_age: e.target.value }))} />
                  </Form.Group>


                  <Form.Group>
                    <label>Tamaño</label>
                    <select name='tamaño' className="form-control m-b" required
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
                    <select name='sexo' className="form-control m-b" required
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
                    <select name='actividad' className="form-control m-b" required
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
                    <select name='pelo' className="form-control m-b" required
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
                      name='historia'
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
export default PageRegistroAnimales