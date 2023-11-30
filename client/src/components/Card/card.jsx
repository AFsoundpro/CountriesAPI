import "./card.css";
import { Link } from "react-router-dom";

function Card({info}) {
    return(
        <div className='card-cont'>
            <div className='card-cont-title'>
            <h2>{info.ID}</h2>
            <h2>{info.Nombre}</h2>
        </div>
        <div className='card-cont-info'>
            <h5>{info.Continente}</h5>
            <img src={info.Imagen} alt="" />
            <Link to={{ pathname: `/detail/${info.ID}`, state: { id: info.ID } }}>Ver Detalle</Link>
        </div>
        </div>
    )
}

export default Card;
