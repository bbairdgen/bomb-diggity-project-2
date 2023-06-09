const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Total extends Model {}

Total.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    timesused: {
      type: DataTypes.INTEGER,
    },
    autocorrect_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "autocorrect",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "total",
  }
);

module.exports = Total;
