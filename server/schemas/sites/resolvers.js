const models = require('../../db/models');

module.exports.getSiteByID = (parentValue, { id }) => models.Site.findOne({ where: { id } });

module.exports.getAllSites = () => models.Site.findAll();

module.exports.createSite = (parentValue, {
  name, address, city, state, zipCode,
}) => models.Site.create({
  name, address, city, state, zipCode,
});

module.exports.updateSite = (parentValue, {
  name, address, city, state, zipCode,
}) => models.Site.create({
  name, address, city, state, zipCode,
});

module.exports.removeSite = (parentValue, { id }) => models.Site.destroy({ where: { id } });
