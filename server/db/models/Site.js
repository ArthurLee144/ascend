export default (sequelize, DataTypes) => {
  const Site = sequelize.define('Site', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Site.associate = (models) => {
    Site.hasMany(models.Review, {
      foreignKey: 'siteId',
    });
  };
  return Site;
};
