const Router = require('express').Router();
const {
    accessRegionalHubData,
    accessGroupData,
    accessBuildBackBetterUkData
} = require("./controllers/main");

Router.get('/groups', accessGroupData);
Router.get('/hubs', accessRegionalHubData);
Router.get('/buildbackbetteruk', accessBuildBackBetterUkData);

module.exports = Router;