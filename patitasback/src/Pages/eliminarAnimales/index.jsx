import axios from "axios";
import './eliminar.css'
import { useRef } from "react";
import { useHistory } from "react-router";
function PageEliminarAnimales() {
   
    function getMascota(id_delete) {
        axios
            .delete(`http://localhost:4000/mascotas/${id_delete}`)
            .then((response) => {
                alert('se elimino la mascota correctamente');
            })
            .catch(() => {
                alert('Por favor intentalo nuevamente');
            });
    }
    const delete_id = useRef(null);
    function deleteData() {
        const id_delete = delete_id.current.value;
        getMascota(id_delete)
    }
    return (
        <div className='eliminar_container'>
            <h2>Eliminar datos de mascotas</h2>
            <input type="number" placeholder='Eliminar mascota por id' ref={delete_id} />
            <button onClick={deleteData}>Eliminar</button>
        </div>)
}
export default PageEliminarAnimales;