import './footer.css';
import blanco from "../../assets/image/blanco.png"
import { NavLink } from 'react-router-dom';

function Footer() {
  return <footer className="hd-ft">
    <a href="/"><img className="hd-ft__logo" src={blanco} alt="logotipo" /></a>
    <nav className="hd-ft__nav">
      <ul className="hd-ft__ul">
        <li> <NavLink className="link" to='/adopta'>Adopta</NavLink></li>
        <li> <NavLink className="link responsive" to='/nosotros'>Nosotros</NavLink></li>
        {/* <li> <NavLink className="link" to='/tienda'>Tienda</NavLink></li> */}
        <li> <NavLink className="link responsive" to='/consultas'>Consultas</NavLink></li>
        <li> <NavLink className="link" to='/blog'>Blog</NavLink></li>
      </ul>
    </nav>
    <div className="redes">
      <h5>Visita nuestras redes</h5>
      <div className="redes-iconos">
        <a className="link" href='https://www.facebook.com' target='_blank'> <svg xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg></a>
        <a className="link" href='https://www.twitter.com' target='_blank' > <svg xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-twitter" width="28" height="28" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg></a>
        <a className="link" href='https://www.youtube.com' target='_blank' > <svg xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-youtube" width="28" height="28" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="3" y="5" width="18" height="14" rx="4" />
          <path d="M10 9l5 3l-5 3z" />
        </svg></a>
      </div>
    </div>
  </footer>
}

export default Footer;