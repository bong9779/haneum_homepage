module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'Purchases',
      {
        id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },

       purchase_name : {
        type: DataTypes.STRING(30),
        allowNull : false,
        unique: true
       },

       purchase_phone: {
        type: DataTypes.STRING(100),
        allowNull : false
       },
       purchase_address: {
        type: DataTypes.STRING(100),
        allowNull : false
       },
       purchase_password: {
        type: DataTypes.STRING(100),
        allowNull : false
       },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};