module.exports = (sequelize, Sequelize) => {
    const Casos = sequelize.define('t_casos', {
        caso_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        proco_id: {
            type: Sequelize.INTEGER
        },
        tda_id: {
            type: Sequelize.INTEGER
        },
        dav_id: {
            type: Sequelize.INTEGER
        },
        tdenun_id: {
            type: Sequelize.INTEGER
        },
        caso_numcaso: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        caso_motivo: {
            type: Sequelize.STRING
        },
        caso_observaciones: {
            type: Sequelize.STRING
        },
        caso_fechareg: {
            type: Sequelize.DATE
        },
        caso_fechaingreso: {
            type: Sequelize.DATE
        },

    });

    return Casos;
}