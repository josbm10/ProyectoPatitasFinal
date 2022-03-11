import './header.css';
import blanco from "../../assets/image/blanco.png"
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



function Header() {
  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });

  const userData = useSelector((state) => {
    return state.auth.userData;
  });

  const dispatch = useDispatch();

  let history = useHistory();

  return <header className="hd-ft">
    
    <a href="/"><img className="hd-ft__logo" src={blanco} alt="logotipo" /></a>
    
    {!isLogin? (
      <nav className="hd-ft__nav">
        <ul className="hd-ft__ul">
          <li> <NavLink className="link" to='/adopta'>Adopta</NavLink></li>
          <li> <NavLink className="link responsive" to='/nosotros'>Nosotros</NavLink></li>
          
          <li> <NavLink className="link responsive" to='/consultas'>Consultas</NavLink></li>
          <li> <NavLink className="link" to='/blog'>Blog</NavLink></li>
        </ul>
      </nav>

    ) : (
      <nav className="hd-ft__nav">
      <ul className="hd-ft__ul">
        <li> <NavLink className="link" to='/adopta'>Adopta</NavLink></li>
        <li> <NavLink className="link responsive" to='/nosotros'>Nosotros</NavLink></li>
        
        <li> <NavLink className="link responsive" to='/consultas'>Consultas</NavLink></li>
        <li> <NavLink className="link" to='/blog'>Blog</NavLink></li>
        <li> <NavLink className="link responsive" to='/administrativo'>Perfil</NavLink></li>
      </ul>
    </nav>
    )}
    <div className="container__btn">
      <button className="btn btn-donar" type="button" onClick={(() => { history.push('/donar') })}>Donar</button>
      {!isLogin ? (

        <button className="btn btn-login" type="button" onClick={(() => { history.push('/login') })} >Iniciar sesión</button>
      ) : (
        <>
          <span className='saludo'>
            Bienvenido {userData.username}
          </span>
          <button
            onClick={() => {
              // <Redirect to="/login" />
              history.push('/login');
              dispatch({
                type: 'RESET_USER',
              });
            }}
            className="btn btn-login"
          >
            Salir
          </button>
        </>
      )}

    </div>
  </header>;
}

export default Header;