//actions.js
import axios from 'axios';
import {ORDEN_ALFABETICO, GET_CONTINENTS, GET_COUNTRIES, PAGINATION,SEARCH_COUNTRIES, FILTER_BY_CONTINENT, RESET, ORDEN_DESCENDENTE_ALFABETICO, ORDEN_POBLACION_ASC, ORDEN_POBLACION_DESC } from './action-types';


export function getCountries() {
    return async function(dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/countries");
            console.log(response.data);
        dispatch(
            {type:GET_COUNTRIES,
            payload: response.data}
        )
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function changePage(order) {
    return async function(dispatch) {
        try {
            dispatch(
                {type: PAGINATION,
                payload: order}
            )
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function searchCountries(pais) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/countries/name?query=${pais}`);
            
        dispatch(
            {type:SEARCH_COUNTRIES,
            payload: response.data}
        )
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function getContinents() {
    return async function(dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/continents");
            console.log(response.data);
        dispatch(
            {type:GET_CONTINENTS,
            payload: response.data}
        )
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function filterContinent(order) {
    return async function(dispatch) {
        try {
        dispatch(
            {type:FILTER_BY_CONTINENT,
            payload: order}
        )    
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function restart() {
    return async function(dispatch){
        try {
            dispatch(
                {type:RESET}
            )
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function ordenAlfabetico() {
    return {
      type: ORDEN_ALFABETICO
    };
  }

  export const ordenDescendente = () => {
    return {
      type: ORDEN_DESCENDENTE_ALFABETICO
    };
  };

  export const ordenPoblacionAsc = () => {
    return {
      type: ORDEN_POBLACION_ASC
    };
  };
  
  export const ordenPoblacionDesc = () => {
    return {
      type: ORDEN_POBLACION_DESC
    };
  };

export function postActivity(state) {
    return async function(dispatch){
        try {
            const response = await axios.post(`http://localhost:3001/activities`, state)
            alert("Actividad creado con exito")
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}