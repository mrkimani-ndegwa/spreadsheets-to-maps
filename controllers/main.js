const fetch = require('node-fetch');

const {
    GOOGLE_API_SPREADSHEETS_ID,
} = require("../config");

const accessGroupData = async (req, res) => {
    try {
        const response = await fetch(`http://gsx2json.com/api?id=${GOOGLE_API_SPREADSHEETS_ID}&sheet=4`);
        if(!response.ok){
          throw new Error("Getting local groups failing");
        };
        const data = await response.json();
        const groups = data.rows.map(item=>{
            return {
                source: "google-sheet",
                ...item,
                lat: item.latitude.toString(),
                lng: item.longitude.toString(),
                category: "local_group",
                event_type: 'group',
                supergroup: "Local Groups"
            }
        }).filter(reg=>{
          return reg.hideonmap === 'No' || reg.hideonmap === 0
      });;
        res.send({msg: "Success", groups, groupCount: groups.length})
    } catch(e){
        res.send({msg: "Error", e: e.message || "Unknown Error"})
    }
};

const accessRegionalHubData = async (req, res) => {
    try {
        const response = await fetch(`http://gsx2json.com/api?id=${GOOGLE_API_SPREADSHEETS_ID}&sheet=5`);
        if(!response.ok){
          throw new Error("Getting regional hubs failing");
        };
        const data = await response.json();
        const regionalHubs = data.rows.map(item=>{
            return {
                ...item,
                lat: item.latitude.toString(),
                lng: item.longitude.toString(),
                source: "google-sheet",
                category: "regional_hub",
                event_type: 'group',
                supergroup: "Regional Hubs"
            }
        }).filter(reg=>{
          return reg.hideonmap === 'No' || reg.hideonmap === 0
      });;
        res.send({msg: "Success", regionalHubs, regionalHubsCount: regionalHubs.length})
    } catch(e){
        res.send({msg: "Error", e: e.message || "Unknown Error"})
    }
};

const accessBuildBackBetterUkData = async(req, res) => {
    try{
        const response = await fetch(`http://gsx2json.com/api?id=1L8uBgAWy1zc2BJNuBVHe_ymYM3GNxIcLAuydN0W6dQQ`);
        if(!response.ok){
          throw new Error("Getting regional hubs failing");
        }; 
        const data = await response.json(); 
        res.send({msg: "Success", data: data.rows})
    } catch(e){
        res.send({msg: "Error", e: e.message || "Unknown Error"})
    }
};


module.exports =  {
    accessGroupData,
    accessRegionalHubData,
    accessBuildBackBetterUkData
};