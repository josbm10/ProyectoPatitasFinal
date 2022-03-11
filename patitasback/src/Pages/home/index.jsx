import { Link } from "react-router-dom"
import './header.css';
import blanco from "../../assets/image/blanco.png"
import bgperro from "../../assets/image/bg-perro.jpg"
import perro1 from "../../assets/image/perro1.webp"
import perro2 from "../../assets/image/perro2.webp"
import perro3 from "../../assets/image/perro3.webp"
import perro4 from "../../assets/image/perro4.jpg"
import perro5 from "../../assets/image/perro5.jpg"
import perro6 from "../../assets/image/perro6.webp"
import perro7 from "../../assets/image/perro7.webp"
import perro8 from "../../assets/image/perro8.jpg"
import grupo from "../../assets/image/grupo.jpg"
import ayuda from "../../assets/image/ayuda.jpg"
import nosotros from "../../assets/image/nosotros.jpg"
import './home.css';

function PageHome() {
    return (
        <div>
            <section className="home-header" style={{ backgroundImage: `url(${bgperro})` }}>
                {/* <section className="header__container">
                    <div className="header-izq">
                        <a href="."><img class="header__logo" src={blanco} alt="logo" /></a>
                    </div>
                    <div className="header-der">
                        <nav className="header__nav">
                            <ul className="header__ul">
                                <li><Link to="/adopta">Adopta</Link></li>
                                <li><Link to="/nosotros">Nosotros</Link></li>
                                <li><Link to="/tienda">Tienda</Link></li>
                                <li><Link to="/consultas">Consultas</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </nav>
                        
                    </div>
                </section> */}
                <div className="header__cont">
                    <h1>
                        ¡Ayúdanos a construir un mundo mejor para ellos!
                    </h1>
                    
                </div>
                {/* <button className="btn btn-adoptar"><Link to="/adopta">Adoptar</Link></button> */}
            </section>
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
            <section className="adoptar">
                <h2>Adoptar</h2>
                <div className="adoptar__container">
                    <Link to="/adopta"><img src={perro1} alt="perro" />
                    </Link>
                    <Link to="/adopta"><img src={perro2} alt="perro" />
                    </Link>
                    <Link to="/adopta"><img src={perro3} alt="perro" />
                    </Link>
                    <Link to="/adopta"><img src={perro4} alt="perro" />
                    </Link>
                    <Link to="/adopta"><img src={perro5} alt="perro" />
                    </Link>
                    <Link to="/adopta"><img src={perro6} alt="perro" />
                    </Link>
                    <Link to="/adopta"><img className="img-none" src={perro7} alt="perro" />
                    </Link>
                    <Link to="/adopta"><img className="img-none" src={perro8} alt="perro" />
                    </Link>
                </div>
                <div className="adoptar-btn">
                    <button className="btn btn-adoptar"><Link to="/adopta">Adoptar</Link></button>
                    <button className="btn btn-donar"><Link to="/donar">Donar</Link></button>
                </div>
            </section>
            <section className="equipo">
                <h2>Nuestro equipo</h2>
                <img src={grupo} alt="equipo" />
            </section>
            <section className="ayuda">
                <h2>Compra y ayuda en “Adoptame”</h2>
                <div className="ayuda__container">
                    <div className="ayuda__info">
                        <p>
                            of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letras
                        </p>
                        <button className="btn btn-adoptar"><Link to="/adopta">Adoptar</Link></button>
                    </div>
                    <img src={ayuda} alt="perro" />
                </div>
            </section>
        </div>
    )
}

export default PageHome;