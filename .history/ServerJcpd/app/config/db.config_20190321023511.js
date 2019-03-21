const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.analisisCasos = require('../model/analisis_casos.model.js')(sequelize, Sequelize);
db.audiencia = require('../model/audiencia.model.js')(sequelize, Sequelize);
db.proco = require('../model/procesamientoConocimiento.model.js')(sequelize, Sequelize);

db.casos = require('../model/casos.model.js')(sequelize, Sequelize);
db.user = require('../model/user.model.js')(sequelize, Sequelize);
db.role = require('../model/role.model.js')(sequelize, Sequelize);


// TABLAS RELACIONALES 
db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId' });
db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId' });
db.casos.belongsToMany(db.casos, { through: 't_casos', foreignKey: 'proco_id', otherKey: 'proco_id' })

module.exports = db;