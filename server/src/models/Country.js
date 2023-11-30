const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Country = sequelize.define('Country', {
    ID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Continente: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Capital: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Subregion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Area: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Poblacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
  });
  return Country; 
};   