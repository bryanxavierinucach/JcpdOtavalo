module.exports = (sequelize, Sequelize) => {
    const Avocatoria = sequelize.define('t_avocatoria', {
        avo_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        anc_id: {
            type: Sequelize.INTEGER
        },
        avo_fecha_conciliacion: {
            type: Sequelize.DATE
        },
        avo_observaciones: {
            type: Sequelize.STRING
        },
        avo_hora_audiencia: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true

    });

    return Avocatoria;
}