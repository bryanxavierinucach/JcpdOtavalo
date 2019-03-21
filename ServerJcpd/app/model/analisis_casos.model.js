module.exports = (sequelize, Sequelize) => {
    const AnalisisCasos = sequelize.define('t_analisis_casos', {
        anc_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        caso_id: {
            type: Sequelize.INTEGER
        },
        tica_id: {
            type: Sequelize.INTEGER
        },
        anc_observacion: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return AnalisisCasos;
}