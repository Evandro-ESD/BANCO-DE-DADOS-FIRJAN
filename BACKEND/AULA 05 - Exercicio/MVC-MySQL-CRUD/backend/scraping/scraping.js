const ExcelJS = require('exceljs');

async function lerExcel(caminho) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(caminho);

  const planilha = workbook.getWorksheet(1);
  planilha.eachRow((row, rowNumber) => {
    console.log(`Linha ${rowNumber}: ${row.values}`);
  });
}

lerExcel('./');