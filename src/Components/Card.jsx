import React from "react";
import { useGlobalStates } from '../Components/utils/Context';
import { Link } from 'react-router-dom'
import "../Styles/Card.css"


const Card = ({dentista}) => {

  const {dispatch, state} = useGlobalStates();

  const findDentista = state.favoritos.some((favDentista) => favDentista.id === dentista.id);

  const addFav = ()=>{
    
    if (!findDentista) {
      dispatch({ type: "ADD_FAV", payload: dentista });
      alert('Dentista agregado a destacados');
    } else {
      alert('Este dentista ya ha sido agregado a destacados');
    }
  }



  return (
      <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={"/Detail/" + dentista.id}> 
      <div key={dentista.id}>
      <img src="/images/doctor.jpg"  className='imagendoctor' alt="doctor" />
      <ul>
      <li><span className="bold">Id:</span> {dentista.id}</li>
      <li><span className="bold">Nombre:</span> {dentista.name}</li>
      <li><span className="bold">Username:</span> {dentista.username}</li>
      </ul>
      </div>
      </Link>        
        <button onClick={() => {addFav()}} className="favButton">  {findDentista ? '🌟' : '⭐'}  </button>
    </div>
    
  );
};

export default Card;

{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
