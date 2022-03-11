import './adopta.css';
import Card from '../../components/card';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useHistory } from 'react-router-dom';

function PageAdopta() {

  let history = useHistory();

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [form, setForm] = useState({
    mascota_tall: '',
    mascota_hair: '',
    mascota_sex: '',
    mascota_act: '',
  });

  const handleSearch = (event) => {
    let value = event.target.value.toUpperCase();
    let result = [];
    result = allData.filter((data) => {

      return data.mascota_nom.search(value) !== -1;
    });
    console.log(result)
    setFilteredData(result);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form)
    let result = [];
    result = allData.filter((data) => {

      return data.mascota_hair.search(form.mascota_hair) !== -1 &&
        data.mascota_act.search(form.mascota_act) !== -1 &&
        data.mascota_sex.search(form.mascota_sex) !== -1 &&
        data.mascota_tall.search(form.mascota_tall) !== -1
    });

    console.log(result)
    setFilteredData(result);
  }

  function resetForm(){
    setFilteredData(allData)
    setForm({})
  }
  

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/mascotas')
      .then(response => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.log('Error: ' + error);
      })
  }, []);

  return (

    <div className="mascotas_container">

      <div className="mascotas_filters">

        <h2>Buscar :</h2>
        <input type="text" placeholder='Nombre' onChange={(event) => handleSearch(event)} />

        <h2>Filtrar por:</h2>
        <form onSubmit={handleSubmit}>
          <h2>Tamaño</h2>
          <select name="" id="" 
            onChange={(e) => setForm((state) => ({ ...state, mascota_tall: e.target.value }))}
          >
            <option value="" selected={form.mascota_tall==''} >Tamaño</option>
            <option value="PEQUEÑO">Pequeño</option>
            <option value="MEDIANO">Mediano</option>
            <option value="GRANDE">Grande</option>
          </select>
          <h2>Sexo</h2>
          <select name="" id="" 
            onChange={(e) => setForm((state) => ({ ...state, mascota_sex: e.target.value }))}
          >
            <option value="" selected={form.mascota_sex==''} >Sexo</option>
            <option value="HEMBRA">Hembra</option>
            <option value="MACHO">Macho</option>
          </select>
          <h2>Nivel de actividad</h2>
          <select name="" id="" 
            onChange={(e) => setForm((state) => ({ ...state, mascota_act: e.target.value }))}
          >
            <option value="" selected={form.mascota_act==''} >Nivel de actividad</option>
            <option value="BAJO">Bajo</option>
            <option value="MEDIO">Medio</option>
            <option value="ALTO">Alto</option>
          </select>
          <h2>Pelo</h2>
          <select name="" id="" 
            onChange={(e) => setForm((state) => ({ ...state, mascota_hair: e.target.value }))}
          >
            <option value="" selected={form.mascota_hair==''} >Pelo</option>
            <option value="CORTO">Corto</option>
            <option value="LARGO">Largo</option>
          </select>
          <button>Filtrar</button>
        </form>
        <br />
        <button onClick={resetForm} >Eliminar Filtros</button>
      </div>
      <div className="mascotas_grid">

        {filteredData.map((value) => {
          return (

            <Card
              key={value.mascota_id}
              id={value.mascota_id}
              photo={value.mascota_img}
              name={value.mascota_nom}
              status={value.mascota_est}
            />
          )
        }
        )}


      </div>
    </div>
  );
}

export default PageAdopta;