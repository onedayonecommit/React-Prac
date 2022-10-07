const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            user_id: {
                type: Sequelize.STRING(40),
                allowNull: false,
                unique: true,
            },
            user_pw: {
                type: Sequelize.STRING(40),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: 'User',
            tableName: 'user',
            charset: "utf8",
            collate: 'utf8_general_ci'
        })
    }
}

module.exports = User