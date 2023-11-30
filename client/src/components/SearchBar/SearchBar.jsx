import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../Redux/actions';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchCountries(input));
        setInput(""); // Esto vacía la barra de búsqueda después de enviar el formulario
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange} type="text" /><input onClick={handleSubmit} type="submit" />
            </form>
        </div>
    )
}

export default SearchBar;