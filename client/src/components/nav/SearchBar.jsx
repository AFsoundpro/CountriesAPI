import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { agregarPokemon } from '../../redux/actions';
import './SearchBar.css'; // Importa el archivo CSS

function SearchBar({ agregarPokemon }) {
  const [pokemonName, setPokemonName] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/${pokemonName}`);
      const nuevoPokemon = response.data.species;

      // Filtra los datos para obtener el nombre y la URL del Pokémon
      const { name, url } = nuevoPokemon;

      // Agrega el nuevo Pokémon al estado global de Redux con nombre y URL
      agregarPokemon({ name, url });

      // Limpia el campo de búsqueda después de agregar el Pokémon
      setPokemonName('');

      // Limpia cualquier error previo
      setError(null);
    } catch (error) {
      console.error('Error al buscar el Pokémon:', error);
      setError('No se encontró ningún Pokémon con ese nombre o ID.');
    }
  };

  return (
    <div className="search-bar-container">
      <p>Buscar Pokemon:</p>
      <input
        type="text"
        placeholder="Nombre o ID del Pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        className="search-input" // Aplica la clase CSS para el campo de búsqueda
      />
      <button onClick={handleSearch} className="search-button">Buscar</button> {/* Aplica la clase CSS para el botón */}
      {error && <div className="error-message">{error}</div>} {/* Aplica la clase CSS para el mensaje de error */}
    </div>
  );
}

export default connect(null, { agregarPokemon })(SearchBar);
