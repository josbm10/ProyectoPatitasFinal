import { Link } from "react-router-dom";
import nosotros from "../../assets/image/nosotros.jpg";
import './nosotros.css';


function PageNosotros() {
    
    return (
        <section className="nosotros">
            <h2>
                Quiénes somos y por qué existimos
            </h2>
            <div className="nosotros__container">
                <img src={nosotros} alt="nosotros" />
                <div className="nosotros__info">
                    <h3>
                        Somos una asociación sin fines de lucro que busca construir un mundo mejor para los perros a
                        través de iniciativas sostenibles.
                    </h3>
                    <div className="nosotros-iconos">
                        <div className="nosotros-icono">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home"
                                width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd6b6c"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>
                            <p>
                                Adopción responsable
                            </p>
                        </div>
                        <div className="nosotros-icono">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dog-bowl"
                                width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd6b6c"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586" />
                                <path
                                    d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586" />
                                <path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z" />
                            </svg>
                            <p>
                                Donaciones agua y comida
                            </p>
                        </div>
                        <div className="nosotros-icono">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vaccine"
                                width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd6b6c"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 3l4 4" />
                                <path d="M19 5l-4.5 4.5" />
                                <path d="M11.5 6.5l6 6" />
                                <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
                                <path d="M7.5 12.5l1.5 1.5" />
                                <path d="M10.5 9.5l1.5 1.5" />
                                <path d="M3 21l3 -3" />
                            </svg>
                            <p>
                                Salud y esterilización
                            </p>
                        </div>
                        <div className="nosotros-icono">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book"
                                width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd6b6c"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <line x1="3" y1="6" x2="3" y2="19" />
                                <line x1="12" y1="6" x2="12" y2="19" />
                                <line x1="21" y1="6" x2="21" y2="19" />
                            </svg>
                            <p>
                                Educación y cuidados
                            </p>
                        </div>
                    </div>
                    <div className="nosotros-btn">
                        <button className="btn btn-adoptar"><Link to="/adopta">Adoptar</Link></button>
                        <button className="btn btn-donar"><Link to="/donar">Donar</Link></button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PageNosotros;