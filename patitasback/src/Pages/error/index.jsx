import { useHistory } from "react-router-dom";
import "./error.css";
function PageError(){
    let history=useHistory();
    return(
        <div className="error_container">
            <img src="https://st4.depositphotos.com/7051866/39923/v/600/depositphotos_399235686-stock-illustration-404-error-page-vector-illustration.jpg" alt="error" />
            <button onClick={(()=>{history.push("/")})}>Regresar al inicio</button>
        </div>
    )
}
export default PageError;