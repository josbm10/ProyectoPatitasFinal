import './formulario.css';
import { useHistory  } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function PageFormulario(props) {
  let history = useHistory();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Formulario Enviado')
      }, (error) => {
          console.log(error.text);
          alert('Error al enviar formulario')
      });
  };

  return (
    <div className="formulario_container">
    
      <img src={require('../../assets/image/Dog1.jpg').default} alt="dog" />
      <h2>Formulario de adopcion</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Nombre de la mascota" name='mascota' required />
        <input type="text" placeholder="Nombres" name='nombre' required />
        <input type="text" placeholder="Apellidos" name='apellido' required />
        <input type="text" placeholder="Telefono" name='telefono' required />
        <input type="email" placeholder="Correo Electronico" name='email' required />
        <input type="number" placeholder="Edad" min="0" name='edad' required />
        <select name="sexo" id="" required >
          <option value='' hidden>Sexo </option>
          <option value="Femenino" style={{ color: 'black' }}>Femenino</option>
          <option value="Masculino" style={{ color: 'black' }}>Masculino</option>
        </select>
        <input type="text" placeholder="Direccion" name='direccion' required />
        <select name="horario" id="" required>
          <option hidden >Horario para cita</option>
          <option value="8AM-12PM" style={{ color: 'black' }}>8AM-12PM</option>
          <option value="1PM-5PM" style={{ color: 'black' }}>1PM-5PM</option>
        </select>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default PageFormulario;