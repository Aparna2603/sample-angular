module.exports = (sequelize, types) => {
  const Employee = sequelize.define('employee', {
    employee_name: {
      type: types.STRING,
      allowNull: false,
    },
    address: {
      type: types.STRING,
      allowNull: false,
      unique: true,
    },
    doj: {
      type: types.STRING,
    },
    Height: {
      type: types.INTEGER,
    },
    Weight: {
      type: types.INTEGER,
    },
    Email: {
      type: types.STRING,
      defaultValue: false,
    },
    Phone_no: {
      type: types.INTEGER,
      defaultValue: false
    },
    gender: {
      type: types.STRING(1000),
    },
    basic_salary: {
      type: types.STRING,
    },
  }, {
    tableName: 'employee',
  });
  return Employee
};
