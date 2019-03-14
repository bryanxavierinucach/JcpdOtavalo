module.exports = (sequelize, Sequelize) => {
    const Audiencia = sequelize.define('t_audiencia', {
        rau_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        caso_id: {
            type: Sequelize.INTEGER
        },
        rau_fecha_conciliacion: {
            type: Sequelize.DATE
        },
        rau_hora_audiencia: {
            type: Sequelize.STRING
        },
        rau_observacion: {
            type: Sequelize.STRING
        },
        rau_resumen: {
            type: Sequelize.STRING
        },
        rau_conciliacion: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return AnalisisCasos;
}