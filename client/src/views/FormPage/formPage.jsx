import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../Redux/actions";
import './form.css';
import NavigationBar from "../../components/nav/NavigationBar";
import Footer from "../../components/Footer/footer";
import Card from "../../components/Card/card";
import { postActivity } from "../../Redux/actions";

const FormPage = () => {

    const dispatch = useDispatch();
    const countries = useSelector(state => state.countriesBackUp);
    const [selectedCountries, setSelectedCountries] = useState([]);


    useEffect(() => {
        dispatch(getCountries())
    }, [])

    //manejo info 

    const [state, setState] = useState({
        Nombre: "",
        Dificultad: 0,
        Duracion: 0,
        Temporada: "",
        agregarPaises: [],
    });

    const handleChange = (event) => {

        if(event.target.name==="agregarPaises"){
            setState({
                ...state,
                [event.target.name]: [...state.agregarPaises, event.target.value]
            })
        } else {
            setState({
                ...state,
                [event.target.name]: event.target.value
            })
        }
        validate(event.target.name, {
            ...state,
                [event.target.name]: event.target.value
        });       
    }

    ///////CONTROL DEL FORM

    const [errors, setErrors] = useState({
        Nombre: "Campo Requerido",
        Dificultad: "Campo Requerido",
        Duracion: "Campo requerido",
        Temporada: "Campo requerido",
        agregarPaises: "Campo requerido",
    });

    const validate = (name, state) => {
        switch (name) {
            case "Nombre":
                if(state.Nombre === "") setErrors({...errors, Nombre:"Campo Requerido"})
                else if(state.Nombre.length > 20) setErrors({...errors, Nombre: "Actividad demasiado larga"})
                else setErrors({...errors, Nombre:""})
                break;
            case "Dificultad":
                if(state.Dificultad === "") setErrors({...errors, Dificultad:"Campo Requerido"})
                else if(isNaN(parseInt(state.Dificultad))){
                    setErrors({...errors, Dificultad:"El dato ingresado no es un numero"})
                }
                if(state.Dificultad > 5) setErrors({...errors, Dificultad: "El numero debe ser entre 1 y 5"})
                else setErrors({...errors, Dificultad:""})
                break;
            case "Duracion":
                if(state.Duracion === "") setErrors({...errors, Duracion:"Campo Requerido"})
                else setErrors({...errors, Duracion:""})
                break;
            case "Temporada":
                if(state.Temporada === "") setErrors({...errors, Temporada:"Campo Requerido"})
                else setErrors({...errors, Temporada:""})
                break;
            case "agregarPaises":
                if(state.agregarPaises === "") setErrors({...errors, agregarPaises:"Campo Requerido"})
                else setErrors({...errors, agregarPaises:""})   
                break;
        
            default:
                break;
        }
    }


    /////////SUBMIT INFO

    const handleSubmit = (event) => {
        event.preventDefault();
    if (state.agregarPaises.length === 0) {
        // establecer un valor predeterminado o lanzar un error
        state.agregarPaises = ["Ningún país seleccionado"];
    }
    dispatch(postActivity(state))
    for(let property in state) {
        document.getElementById(property).value = ""
    }
    }

/////////////////// DESACTIVAR SUBMIT ///////////////

const dissableButton = () => {
    let aux = true;

    for(let error in errors) {
        if(errors[error]==="") aux= false;
        else{
            aux= true;
            break;
            }
    } 
    return aux;
}

    return (
        <div className="form-cont">
            <NavigationBar />
           <div className="form-cont-title">
                <h2>Creacion de Actividades</h2>
           </div>
           {console.log(state)}
           <div className="form-cont-content">
            <div className="form-cont-inputs">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Nombre</label>
                    <input id="Nombre" onChange={handleChange} name="Nombre" type="text" />
                    <label className="form-errors">{errors.Nombre}</label>
                    <label htmlFor="">Dificultad</label>
                    <input id="Dificultad" onChange={handleChange} name="Dificultad" type="text" />
                    <label className="form-errors">{errors.Dificultad}</label>
                    <label htmlFor="">Duracion</label>
                    <input id="Duracion" onChange={handleChange} name="Duracion" type="text" />
                    <label className="form-errors">{errors.Duracion}</label>
                    <label htmlFor="">Temporada</label>
                    <input id="Temporada" onChange={handleChange} name="Temporada" type="text" />
                    <label className="form-errors">{errors.Temporada}</label>
                    <label htmlFor="">Paises</label>
                    <select name="agregarPaises" id="agregarPaises" multiple onChange={(e) => {
                    setSelectedCountries(Array.from(e.target.selectedOptions, option => option.value));
                    handleChange(e); // Llamada a la función handleChange existente
                    }}>
                    {countries.map(country => (
                    <option key={country.Nombre} value={country.Nombre}>{country.Nombre}</option>
                    ))}
                    </select>
                    <label className="form-errors">{errors.agregarPaises}</label>
                    <button disabled={dissableButton()} type="submit">SUBMIT</button>
                    <button type="button" onClick={() => console.log(selectedCountries)}>Ver países seleccionados</button>
                </form>
            </div>
           </div>
           <Footer />
        </div>
    )
}

export default FormPage;