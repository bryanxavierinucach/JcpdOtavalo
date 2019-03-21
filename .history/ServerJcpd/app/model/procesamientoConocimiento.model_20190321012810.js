module.exports = (sequelize, Sequelize) => {
    const Proco = sequelize.define('t_procesamiento_conocimiento', {
        proco_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        proco_nombre: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });
    return Proco;
}