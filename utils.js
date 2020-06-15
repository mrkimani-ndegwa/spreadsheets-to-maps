const { GoogleSpreadsheet } = require('google-spreadsheet');

const {
    GOOGLE_API_SPREADSHEETS_ID,
    GOOGLE_API_SPREADSHEETS_CLIENT_EMAIL,
    GOOGLE_API_SPREADSHEETS_PRIVATE_KEY   
} = require("./config");

const initializeDoc = async () => {
    try {
    // spreadsheet key is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(GOOGLE_API_SPREADSHEETS_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: GOOGLE_API_SPREADSHEETS_CLIENT_EMAIL,
        private_key: GOOGLE_API_SPREADSHEETS_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    });
    
    await doc.loadInfo(); // loads document properties and worksheets
    return doc;
    } catch(e){
        console.log(e, "Error")
        return e
    }
};


module.exports = {
    initializeDoc
}