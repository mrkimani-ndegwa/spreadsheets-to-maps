const Router = require('express').Router();
const {
    accessRegionalHubData,
    accessGroupData
} = require("./controllers/main");

Router.get('/groups', accessGroupData);
Router.get('/hubs', accessRegionalHubData);

module.exports = Router;