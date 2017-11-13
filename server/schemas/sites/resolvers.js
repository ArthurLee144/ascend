const models = require('../../db/models');

module.exports = async function getSiteByID(parentValue, { id }) {
  await models.Site.findOne({ where: { id } });
};

module.exports = async function getAllSites() {
  await models.Site.findAll();
};

module.exports = async function createSite(parentValue, {
  name, address, city, state, zipCode,
}) {
  await models.Site.create({
    name,
    address,
    city,
    state,
    zipCode,
  });
};

module.exports = async function updateSite(parentValue, {
  name, address, city, state, zipCode,
}) {
  await models.Site.create({
    name,
    address,
    city,
    state,
    zipCode,
  });
};

module.exports = async function removeSite(parentValue, { id }) {
  await models.Site.destroy({ where: { id } });
};
