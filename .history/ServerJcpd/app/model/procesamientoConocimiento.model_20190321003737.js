module.exports = (sequelize, Sequelize) => {
    const Proco = sequelize.define('t_procesamiento_conocimiento', {
        proco_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        proco_nombre: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });

    return AnalisisCasos;
}