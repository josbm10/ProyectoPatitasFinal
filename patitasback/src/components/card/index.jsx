import './card.css';
import { useHistory } from "react-router-dom";


function Card(props) {
    const { id, photo, name, status } = props;
    let history = useHistory();
     let classname='card_status';
     if(JSON.parse(status)){
         classname += ' visibility'
     }
    return (
        <article className="grid_card">
            <div className={classname}>Adoptado</div>
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <button disabled={JSON.parse(status)} 
            onClick={(() => { history.push(`/adopta/${id}`) })}>Adoptar</button>
        </article>
    );
}
export default Card;