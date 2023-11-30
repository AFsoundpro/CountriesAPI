//reducer.js
import { GET_CONTINENTS, GET_COUNTRIES, PAGINATION, SEARCH_COUNTRIES, FILTER_BY_CONTINENT, RESET, ORDEN_ALFABETICO, ORDEN_DESCENDENTE_ALFABETICO, ORDEN_POBLACION_ASC, ORDEN_POBLACION_DESC } from "./action-types";

const initialState = {
    countries: [],
    allContinents: [],
    countriesBackUp: [],
    currentPage: 0,
    filters: false
}

const reducer = (state = initialState, action) => {
    const ITEMS_PER_PAGE = 10;
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: [...action.payload].splice(0, ITEMS_PER_PAGE),
                countriesBackUp: action.payload
            };
        case GET_CONTINENTS:
            return {
                ...state,
                allContinents: action.payload
            }
        case SEARCH_COUNTRIES:
            return{
                ...state,
                countries: [...action.payload].splice(0, ITEMS_PER_PAGE),
                countriesFiltered: action.payload,
                filters: true
            };
    
        case PAGINATION:
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const firstIndex = action.payload === 'next'? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE;

            if(state.filters) {

                if(action.payload === 'next' && firstIndex >= state.countriesFiltered.length) return state
                if(action.payload === 'prev' && firstIndex < 0) return state

                return {
                    ...state,
                    countries: [...state.countriesFiltered].splice(firstIndex, ITEMS_PER_PAGE),
                    currentPage: action.payload === 'next'? next_page : prev_page
                }
            }

            

            return {
                ...state,
                countries: [...state.countriesBackUp].splice(firstIndex, ITEMS_PER_PAGE),
                currentPage: action.payload === 'next'? next_page : prev_page
            }
        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countries: [...state.countriesBackUp].filter(c => c.Continente.includes(action.payload)).splice(0, 80),
                continentsFiltered: [...state.countriesBackUp].filter(c => c.Continente.includes(action.payload))
    
            }
        case RESET:
            return{
                ...state,
                countries: [...state.countriesBackUp].splice(0, ITEMS_PER_PAGE),
                continentsFiltered: []
            }
            case ORDEN_ALFABETICO:
                const sortedCountries = [...state.countriesBackUp].sort((a, b) => a.Nombre.localeCompare(b.Nombre));
                const startIndex = state.currentPage * ITEMS_PER_PAGE;
                const paginatedCountries = sortedCountries.slice(startIndex, startIndex + 100);
                return {
                    ...state,
                    countries: paginatedCountries
                };

            case ORDEN_DESCENDENTE_ALFABETICO:
                    const sortedCountriesDesc = [...state.countriesBackUp].sort((a, b) => b.Nombre.localeCompare(a.Nombre));
                    const startIndexDesc = state.currentPage * ITEMS_PER_PAGE;
                    const paginatedCountriesDesc = sortedCountriesDesc.slice(startIndexDesc, startIndexDesc + 100);
                    return {
                      ...state,
                      countries: paginatedCountriesDesc
                    };

                    case ORDEN_POBLACION_ASC:
                        const sortedCountriesAsc = [...state.countriesBackUp].sort((a, b) => a.Poblacion - b.Poblacion);
                        const startIndexAsc = state.currentPage * ITEMS_PER_PAGE;
                        const paginatedCountriesAsc = sortedCountriesAsc.slice(startIndexAsc, startIndexAsc + 100);
                        return {
                          ...state,
                          countries: paginatedCountriesAsc
                        };
                      
                      case ORDEN_POBLACION_DESC:
                        const sortedCountriesDescp = [...state.countriesBackUp].sort((a, b) => b.Poblacion - a.Poblacion);
                        const startIndexDescp = state.currentPage * ITEMS_PER_PAGE;
                        const paginatedCountriesDescp = sortedCountriesDescp.slice(startIndexDescp, startIndexDescp + 100);
                        return {
                          ...state,
                          countries: paginatedCountriesDescp
                        };


        default:
            return state;     
    }
};

export default reducer;