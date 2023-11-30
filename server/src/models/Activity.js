const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const Activity = sequelize.define('Activity', {
        ID: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Dificultad: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        Duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Temporada: {
            type: DataTypes.STRING
        },
        agregarPaises: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    });
    return Activity;
}