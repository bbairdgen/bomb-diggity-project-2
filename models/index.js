// create module export
const User = require('./User')
const Autocorrect = require('./Autocorrect')
const Total = require('./Total')

User.hasMany(Autocorrect, {
    foreignKey: 'user_id'
});

Autocorrect.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Total, {
    foreignKey: 'user_id'
});

Total.belongsTo(User, {
    foreignKey: 'user_id'
});

Autocorrect.hasMany(Total, {
    foreignKey: 'autocorrect_id'
});

Total.belongsTo(Autocorrect, {
    foreignKey: 'autocorrect_id'
});

module.exports = { User, Total, Autocorrect }