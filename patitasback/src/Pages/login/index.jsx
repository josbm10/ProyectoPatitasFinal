import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './login.css'
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';



function PageLogin() {

  let history = useHistory();
  
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form)
    onSubmitForm(form);
}

  function onSubmitForm(form) {
  axios.post('http://localhost:8000/login',form)
    .then(response => {
      console.log(response.data)
      // setAllData(response.data);
      
      onSubmit(response.data)
      
    })
    .catch(function (error) {
      
      if (error.response) {
        alert(error.response.data.detail);
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
  function onSubmit(a) {
    const response = a
    console.log(response)
    console.log(response.user)
    console.log(response.access)
    if (response) {
      
      dispatch({
        type: 'SET_LOGIN',
        payload: true,
      });
      dispatch({
        type: 'SET_USER',
        payload: response.user,
      });
      dispatch({
        type: 'SET_TOKEN',
        payload: response.access,
      });
      <Redirect to='/administrativo'/>
      
    } else {
      alert('El usuario no existe porfavor registrate');
    }
  }

  return (
    <div class="form_wrapper">
      <div class="form_container">
        <div class="title_container">
          <h2>Iniciar Sesion</h2>
        </div>
        <div class="row clearfix">
          <div class="">
            <form onSubmit={handleSubmit}>
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                <input type="text" name="username" placeholder="Usuario" required
                value={form.username}
                onChange={(e) =>  setForm((state) => ({ ...state, username: e.target.value }))} />
              </div>

              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Contraseña" required
                value={form.password}
                    onChange={(e) =>  setForm((state) => ({ ...state, password: e.target.value }))} />
              </div>

              <input class="button" type="submit" value="Ingresar" />

            </form>

            <div class="input_field checkbox_option">
              <a href="">No tienes una cuenta,Registrate?</a>
            </div>
            <div class="input_field checkbox_option">
            <NavLink to='/registrarse'><input class="button" type="submit" value="Registrarse" style={{ backgroundColor:'#003566'} }/></NavLink>
            </div>
            
          </div>
        </div>
      </div >
    </div >
  );
}

export default PageLogin;
