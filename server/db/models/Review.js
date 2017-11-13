module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    // Review.belongsTo(models.Site, {
    //   foreignKey: 'siteId',
    // });
  };
  return Review;
};
