module.exports.Review = function(db, DataTypes) {
  const ReviewModel = db.define('review', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return ReviewModel;
}
