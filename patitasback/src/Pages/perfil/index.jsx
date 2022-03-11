import "./perfil.css";
import { useEffect, useState } from 'react';
import { useParams,useHistory } from "react-router-dom";
import axios from 'axios';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


function PagePerfil(props) {

    const [dog, setDog] = useState({});
    let history = useHistory();
    
    let { mascota_id } = useParams();
    function getMascota(mascota_id) {
        axios
            .get(`http://localhost:8000/mascotas/${mascota_id}`)
            .then((response) => {
                console.log(response.data);
                setDog(response.data)
            })
            .catch((e) => {
                console.log(e)
            });
    }

    useEffect(() => {
        getMascota(mascota_id);
    }, []);


    return (
        
        <div className='perfil_container'>
            <div className='perfil_carrusel'>
                {/* <Carrusel key={dog.id} id={dog.id} photo={dog.photo}/> */}
                <img src={dog.mascota_img} alt={dog.mascota_nom} />
            </div>
            <div className="perfil_detalles">
                <ul>
                    <li style={{fontSize:'24px'}}>{dog.mascota_nom}</li>
                    <li>Sexo: {dog.mascota_sex}</li>
                    <li>Tamaño: {dog.mascota_tall}</li>
                    <li>Pelo: {dog.mascota_hair}</li>
                    <li>Edad: {dog.mascota_age} años</li>
                    <li>Nivel de Actividad: {dog.mascota_act}</li>
                    <li>Conoce un poco mi historia:</li>
                    <li>{dog.mascota_hty}</li>
                    <li className='li_buttons'>
                        <button onClick={() => history.push('/donar')}>Ayudame</button>
                        <button onClick={() => history.push('/formulario')}>Adoptame</button>
                    </li>
                    <li className='li_redes'>
                        Compartelo en las redes sociales
                        <div>
                            <a target='_blank' href='https://www.facebook.com'><FaFacebook /></a>
                            <a  href='https://www.twitter.com'  target="_blank"><FaTwitter /></a>
                            <a  href='https://www.youtube.com' target="_blank"><FaYoutube /></a>
                        </div>

                    </li>
                    <button className="btn_regresar" onClick={() => history.push('/adopta')}>Regresar</button>
                </ul>
            </div>

            <div className="proceso_adopcion">
                <h2>¿COMO ES EL PROCESO DE ADOPCION?</h2>
                <ul>
                    <li>1. Elige a tu mascota preferida y envia el formulario de adopcion
                        <img src={require('../../assets/image/sending_dog.jpg').default} alt="adopcion" />
                    </li>
                    <li>2. Completa el formulario que te enviamos a tu correo
                        <img src={require('../../assets/image/email_dog.jpg').default} alt="adopcion" />
                    </li>
                    <li>3. Realizaremos un videollamada para conocerte mejor
                        <img src={require('../../assets/image/video_dog.jpg').default} alt="adopcion" />
                    </li>
                    <li>4. Abono para la fundacion
                        <img src={require('../../assets/image/money_dog.jpg').default} alt="adopcion" />

                    </li>
                    <li>5. Tu nuevo amigo llegara a tu casa en un plazo de 5 dias
                        <img src={require('../../assets/image/adopt_dog.jpg').default} alt="adopcion" />

                    </li>
                </ul>
            </div>

        </div >
    )
}
export default PagePerfil;