
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('employee', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    employee_name: Sequelize.TEXT,
    address:Sequelize.TEXT,
    doj: Sequelize.TEXT,
    height: Sequelize.TEXT,
    weight:Sequelize.TEXT,
    email: Sequelize.TEXT,
    gender: Sequelize.TEXT,
    basic_salary: Sequelize.TEXT,
    grosspay:Sequelize.TEXT,
    createdAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE
    },
  }),
  down: queryInterface => queryInterface.dropTable('employee',{

  })

};
