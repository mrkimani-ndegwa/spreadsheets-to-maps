const Router = require('express').Router();
const {
    accessRegionalHubData,
    accessGroupData,
    accessBuildBackBetterUkData,
    accessSalesForceGroups
} = require("./controllers/main");

Router.get('/groups', accessGroupData);
Router.get('/hubs', accessRegionalHubData);
Router.get('/buildbackbetteruk', accessBuildBackBetterUkData);
Router.get('/salesforce-groups', accessSalesForceGroups);

module.exports = Router;