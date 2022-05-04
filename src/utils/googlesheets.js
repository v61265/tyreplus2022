const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./credentials.json');

async function appendSpreadsheet(newRow) {
  const doc = new GoogleSpreadsheet('1EnXsMernyQFk1DmMgGT_rSXFwTOUtjzKWNltXD3zic0');
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[0];

  const result = await sheet.addRow(newRow);
  return result;
};

module.exports = {
    appendSpreadsheet,
};