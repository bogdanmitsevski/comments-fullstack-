const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}
});

const Context = sequelize.define('context',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userName: {type: DataTypes.STRING, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    file: {type: DataTypes.STRING, unique: true, allowNull: true},
    text: {type:  DataTypes.STRING, allowNull: false}
});

Users.hasMany(Context);
Context.belongsTo(Users);

module.exports = { 
    Users,
    Context
};
