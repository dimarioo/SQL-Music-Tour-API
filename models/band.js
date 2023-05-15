// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Band extends Model{}

Band.init({
    band_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    band_name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    band_genre: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {sequelize,                           
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false})

// EXPORT
module.exports = Band


