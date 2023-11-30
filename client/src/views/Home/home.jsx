import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {ordenDescendente, getCountries, changePage, getContinents, filterContinent, restart, ordenAlfabetico, ordenPoblacionAsc, ordenPoblacionDesc} from '../../Redux/actions';
import Cards from "../../components/Cards/Cards";

import './home.css';
import NavigationBar from '../../components/nav/NavigationBar';
import Footer from "../../components/Footer/footer";

function Home() { 
 
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    const currentPage = useSelector(state => state.currentPage);
    

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getContinents())
    }, [])

    const pagination = (event) => {
        dispatch(changePage(event.target.name))
    }

    const filterByContinent = (event) => {
        dispatch(filterContinent(event.target.value))
    }

    const continents = [
        { value: "Africa", label: "África" },
        { value: "Europe", label: "Europa" },
        { value: "Oceania", label: "Oceanía" },
        { value: "Asia", label: "Asia" },
        { value: "Americas", label: "Américas" },
        { value: "Antarctic", label: "Antártida" }
      ];

    const reset = (event) => {
        dispatch(restart())
    }

    const handleOrdenAlfabetico = () => {
        dispatch(ordenAlfabetico());
      }
    const handleOrdenDescendente = () => {
        dispatch(ordenDescendente());
    }

    //Filtros Poblacion

    const handleOrdenPoblacionAsc = () => {
        dispatch(ordenPoblacionAsc());
      }
      
      const handleOrdenPoblacionDesc = () => {
        dispatch(ordenPoblacionDesc());
      }

    return (
        <section className="home">
            <NavigationBar />
            <div className="filters-cont">
            <div>
                <h3>Restar</h3>
                <button onClick={reset}>Quitar Filtros</button>
            </div>
            <hr />
            <div>
                <h3>Current Page: {currentPage}</h3>
                <button onClick={pagination} name='prev'>{'<<'}</button>
                <button onClick={pagination} name='next'>{'>>'}</button>
            </div>
            <hr />
            <div>
                <h3>Filtros/ORD</h3>
                <div>
                    <select name="filterBycontinent" onChange={filterByContinent}>
                    {continents.map((continent) => (
                    <option key={continent.value} value={continent.value}>
                    {continent.label}
                    </option>
                    ))}
                    </select>
                </div>
            </div>
            <hr />
            <div>
                <h3>Filtros Orden Alfabetico</h3>
                <button onClick={handleOrdenAlfabetico} name='a-z'>{'A-Z'}</button>
                <button onClick={handleOrdenDescendente} name='z-a'>{'Z-A'}</button>
            </div>
            <hr />
            <div>
                <h3>Filtros Por Poblacion</h3>
                <button onClick={handleOrdenPoblacionAsc} name='asc'>{'Menor a mayor'}</button>
                <button onClick={handleOrdenPoblacionDesc} name='desc'>{'Mayor a menor'}</button>
            </div>
            </div>
            
            <div className="cards-cont">
                <Cards countries={countries}/>
            </div>
        </section>
    )
}

export default Home;  