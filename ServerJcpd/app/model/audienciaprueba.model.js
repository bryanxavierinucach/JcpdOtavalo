module.exports = (sequelize, Sequelize) => {
    const Audienciaprueba = sequelize.define('t_audienciaprueba', {
        apr_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        caso_id: {
            type: Sequelize.INTEGER
        },
        rau_id: {
            type: Sequelize.INTEGER
        },
        apr_fecha_avocatoria_caso: {
            type: Sequelize.DATE
        },
        apr_fecha_resgistro_caso: {
            type: Sequelize.DATE
        },
        apr_fecha_audienciap: {
            type: Sequelize.DATE
        },
        apr_hora_audienciap: {
            type: Sequelize.STRING
        },
        apr_observacion: {
            type: Sequelize.STRING
        },
        apr_resumen_audiencia: {
            type: Sequelize.STRING
        },
        apr_conciliacion: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Audienciaprueba;
}