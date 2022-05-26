const User = require('./User');
const Password = require('./Password');

User.hasMany(Password, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Password };
