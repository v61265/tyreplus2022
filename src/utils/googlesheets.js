import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "./credentials.json";

async function appendSpreadsheet(newRow) {
  const doc = new GoogleSpreadsheet(
    "1EnXsMernyQFk1DmMgGT_rSXFwTOUtjzKWNltXD3zic"
  );
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[0];

  const result = await sheet.addRow(newRow);
  return result;
}

export default appendSpreadsheet;
