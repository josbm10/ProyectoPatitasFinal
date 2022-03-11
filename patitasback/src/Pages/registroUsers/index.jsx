import './registro.css';
import { useState } from 'react';
import axios from 'axios';
import { NavLink,useHistory } from 'react-router-dom';


function PageRegistroUsuarios() {
    const history=useHistory()
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    });
    function saveUsers(form) {
    
        axios
            .post('http://localhost:8000/register', form)
            .then((response) => {
                console.log(response)
                alert('Se registro correctamente')
                history.push('/login')

            }).catch(function (error) {
                
                if (error.response) {
                    alert(`
                    Usuario:${error.response.data.username}
                    Password:${error.response.data.password}
                    Email:${error.response.data.email}`);
                    
                   
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
        console.log(form)
        saveUsers(form);
    }

    return (

        <div class="form_wrapper">
            <div class="form_container">
                <div class="title_container">
                    <h2>Registro</h2>
                </div>
                <div class="row clearfix">
                    <div class="">
                        <form action="post" onSubmit={handleSubmit}>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                <input type="text" name="username" placeholder="Usuario" value={form.username} required
                                    onChange={(e) => setForm((state) => ({ ...state, username: e.target.value }))
                                    } />
                            </div>
                            
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                <input type="email" name="email" placeholder="Correo Electronico" value={form.email} required
                                    onChange={(e) => setForm((state) => ({ ...state, email: e.target.value }))
                                    } />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Contraseña" value={form.password} required
                                    onChange={(e) => setForm((state) => ({ ...state, password: e.target.value }))
                                    } />
                            </div>

                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                <input type="text" name="name" placeholder="Nombre" required value={form.first_name}
                                    onChange={(e) => setForm((state) => ({ ...state, first_name: e.target.value }))
                                    } />
                            </div>


                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                <input type="text" name="name" placeholder="Apellido" required value={form.last_name}
                                    onChange={(e) => setForm((state) => ({ ...state, last_name: e.target.value }))
                                    } />

                            </div>

                            <input class="button" type="submit" value="Registrar" />
                        </form>
                        <div class="input_field checkbox_option">
                            <NavLink to='/login'><input class="button" type="submit" value="Iniciar Sesion" style={{ backgroundColor: '#003566' }} /></NavLink>
                        </div>
                      
                    </div>

                </div>
            </div >
        </div >
    )
}

export default PageRegistroUsuarios;