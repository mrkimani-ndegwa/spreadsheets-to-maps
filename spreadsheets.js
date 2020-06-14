const {
    GOOGLE_API_SPREADSHEETS_ID,
    GOOGLE_API_SPREADSHEETS_CLIENT_EMAIL,
    GOOGLE_API_SPREADSHEETS_PRIVATE_KEY   
} = require("./config");

// This will definitely move once we move the ETL to a proper API.
// Frustrating but necessary

const { GoogleSpreadsheet } = require('google-spreadsheet');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(GOOGLE_API_SPREADSHEETS_ID);

const getData = async () => {
    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: GOOGLE_API_SPREADSHEETS_CLIENT_EMAIL,
        private_key: GOOGLE_API_SPREADSHEETS_PRIVATE_KEY,
    });
    
    await doc.loadInfo(); // loads document properties and worksheets
    const localGroupRows = await doc.sheetsById[0].getRows();
    console.log(localGroupRows[0].geolocation, "local group rows")
    // console.log(doc.sheetsById[0]);
};

export {
    getData
};