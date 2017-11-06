module.exports.Site = function(db, DataTypes) {
  const SiteModel = db.define('site', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return SiteModel;
}
