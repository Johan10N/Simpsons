import { useState } from "react";
import MydModalWithGrid from "./Model";
import Button from 'react-bootstrap/Button';

function Caracteres({ character }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="tarjeta card text-center" >
      <br></br>
      <img
        className="card-img-top imagen2" 
        src={character.Imagen}
        alt={character.Nombre}
      ></img>
      <div className="card card-body">
      <div className="card-title h5">
      <h5>{character.Nombre}</h5>
      </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Detalle
      </Button>
      <MydModalWithGrid  show={modalShow} onHide={() => setModalShow(false)} 
      nombre={character.Nombre} estado={character.Estado} ocupa={character.Ocupacion}
      sexo={character.Genero} histo={character.Historia}/>       
   
      
     </div>
    </div>
  );
}

export default Caracteres;
