const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    username: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}
});

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    parent: {type: DataTypes.INTEGER, allowNull: true},
    related: {type: DataTypes.INTEGER, allowNull: true},
    file: {type: DataTypes.STRING, allowNull: true},
    text: {type:  DataTypes.STRING, allowNull: false},


});

const Like = sequelize.define('like', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userID: {type: DataTypes.INTEGER},
    commentID: {type: DataTypes.INTEGER}
});

Users.hasMany(Comment);
Comment.belongsTo(Users);

Comment.hasMany(Like);
Like.belongsTo(Comment);

Users.hasMany(Like);
Like.belongsTo(Users);

module.exports = { 
    Users,
    Comment,
    Like
};
